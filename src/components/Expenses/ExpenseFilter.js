import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (event) => {

        props.onFilterYear(event.target.value);
    };

    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.selected}  onChange={dropdownChangeHandler}>
              <option value='all'>All</option>
              <option value='2025'>2025</option>
              <option value='2024'>2024</option>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
            </select>
          </div>
        </div>
      );
};


export default ExpenseFilter;