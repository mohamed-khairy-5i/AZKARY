
import React, { useState } from 'react';
import { Zikr } from '../types';
import { InfoIcon, TranslateIcon } from './icons';

interface ZikrCardProps {
  zikr: Zikr;
  currentCount: number;
  onCountChange: () => void;
}

const ZikrCard: React.FC<ZikrCardProps> = ({ zikr, currentCount, onCountChange }) => {
  const [showFadhil, setShowFadhil] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const isCompleted = currentCount === 0;

  return (
    <div className={`
      bg-white rounded-xl shadow-sm border-2 
      ${isCompleted ? 'border-emerald-400 opacity-60' : 'border-transparent'}
      transition-all duration-300
    `}>
      <div 
        className={`p-6 cursor-pointer relative ${isCompleted ? '' : 'hover:bg-gray-50'}`} 
        onClick={!isCompleted ? onCountChange : undefined}
      >
        <p className="font-amiri text-2xl md:text-3xl leading-relaxed text-gray-800 text-center whitespace-pre-line">
          {zikr.content}
        </p>
        {!isCompleted && (
          <div className="absolute top-3 left-3 bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md">
            {currentCount}
          </div>
        )}
      </div>
      <div className="bg-gray-100/70 p-2 border-t border-gray-200 flex items-center justify-end gap-2 rounded-b-xl">
        <button 
          onClick={() => setShowFadhil(!showFadhil)}
          className="flex items-center gap-1.5 text-sm text-emerald-700 hover:text-emerald-900 font-semibold p-2 rounded-md hover:bg-emerald-100 transition-colors"
        >
          <InfoIcon className="w-5 h-5" />
          <span>الفضل</span>
        </button>
        {zikr.translation && (
           <button 
            onClick={() => setShowTranslation(!showTranslation)}
            className="flex items-center gap-1.5 text-sm text-blue-700 hover:text-blue-900 font-semibold p-2 rounded-md hover:bg-blue-100 transition-colors"
           >
            <TranslateIcon className="w-5 h-5" />
            <span>Translation</span>
           </button>
        )}
      </div>
      {showFadhil && (
        <div className="p-4 bg-emerald-50 border-t border-emerald-200 text-emerald-900 text-sm">
          <p>{zikr.fadhil}</p>
        </div>
      )}
      {showTranslation && zikr.translation && (
        <div className="p-4 bg-blue-50 border-t border-blue-200 text-blue-900 text-sm" dir="ltr">
          <p>{zikr.translation}</p>
        </div>
      )}
    </div>
  );
};

export default ZikrCard;
