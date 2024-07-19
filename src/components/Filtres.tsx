import React from 'react';
import '../styles/filters.css';

type Filter = 'all' | 'active' | 'completed';

interface FiltersProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const Filters: React.FC<FiltersProps> = ({ filter, setFilter }) => {
  return (
    <div className='button-container'>
      <button 
        className={filter === 'all' ? 'selected' : ''} 
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button 
        className={filter === 'active' ? 'selected' : ''} 
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button 
        className={filter === 'completed' ? 'selected' : ''} 
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
