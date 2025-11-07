
import React from 'react';
import { Category } from '../types';
import { ChevronRight } from './icons';

interface CategoryCardProps {
  category: Category;
  onSelect: (category: Category) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(category)}
      className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center cursor-pointer transition-all duration-300 hover:shadow-lg hover:bg-emerald-50 hover:border-emerald-500 border-2 border-transparent"
    >
      <h3 className="text-xl font-bold text-emerald-900 font-amiri">{category.title}</h3>
      <ChevronRight className="w-8 h-8 text-emerald-600" />
    </div>
  );
};

export default CategoryCard;
