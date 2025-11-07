
import React from 'react';
import { Category } from '../types';
import CategoryCard from './CategoryCard';

interface CategorySelectorProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, onSelectCategory }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6 text-emerald-800 font-amiri">اختر مجموعة الأذكار</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} onSelect={onSelectCategory} />
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
