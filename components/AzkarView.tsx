
import React, { useState, useEffect, useMemo } from 'react';
import { Category, Zikr } from '../types';
import ZikrCard from './ZikrCard';
import ProgressBar from './ProgressBar';

interface AzkarViewProps {
  category: Category;
}

const AzkarView: React.FC<AzkarViewProps> = ({ category }) => {
  const [zikrCounts, setZikrCounts] = useState<Record<number, number>>(() => {
    const counts: Record<number, number> = {};
    category.azkar.forEach(zikr => {
      counts[zikr.id] = zikr.count;
    });
    return counts;
  });

  const handleZikrClick = (zikrId: number) => {
    setZikrCounts(prevCounts => {
      const newCount = prevCounts[zikrId] > 0 ? prevCounts[zikrId] - 1 : 0;
      return { ...prevCounts, [zikrId]: newCount };
    });
  };

  const totalCount = useMemo(() => category.azkar.reduce((sum, zikr) => sum + zikr.count, 0), [category.azkar]);
  const completedCount = useMemo(() => {
      const remaining = Object.values(zikrCounts).reduce((sum, count) => sum + count, 0);
      return totalCount - remaining;
  }, [zikrCounts, totalCount]);

  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="sticky top-[76px] bg-gray-50/90 backdrop-blur-sm py-3 z-10">
        <ProgressBar progress={progress} />
      </div>
      {category.azkar.map((zikr) => (
        <ZikrCard 
          key={zikr.id} 
          zikr={zikr} 
          currentCount={zikrCounts[zikr.id]} 
          onCountChange={() => handleZikrClick(zikr.id)} 
        />
      ))}
    </div>
  );
};

export default AzkarView;
