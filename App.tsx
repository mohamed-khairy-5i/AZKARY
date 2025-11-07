
import React, { useState } from 'react';
import { Category } from './types';
import { azkarData } from './data/azkarData';
import CategorySelector from './components/CategorySelector';
import AzkarView from './components/AzkarView';
import { ChevronRight } from './components/icons';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <header className="bg-emerald-800 text-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {selectedCategory ? (
            <button onClick={handleBack} className="flex items-center gap-2 text-lg hover:bg-emerald-700 rounded-md p-2 transition-colors">
              <ChevronRight className="w-6 h-6 transform rotate-180" />
              <span className="font-semibold">{selectedCategory.title}</span>
            </button>
          ) : (
             <h1 className="text-2xl font-bold font-amiri">أذكــــار</h1>
          )}
           <div className="text-sm opacity-80">
            {selectedCategory ? ' ' : 'حصن المسلم'}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto p-4 md:p-6">
        {selectedCategory ? (
          <AzkarView category={selectedCategory} />
        ) : (
          <CategorySelector categories={azkarData} onSelectCategory={handleSelectCategory} />
        )}
      </main>
    </div>
  );
};

export default App;
