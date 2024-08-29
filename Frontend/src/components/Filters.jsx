import React from "react";
import "../index.css";

function Filters() {
    return (
        <div>

            <div className="filters-container">

                    <aside>
                        <h3 className="filter-name">Categories</h3>

                        <label className="filter-all filter">
                            <input type="checkbox" />
                            All
                        </label>

                        <label className="filter-ele filter">
                            <input type="checkbox" />
                            Electronics
                        </label>

                        <label className="filter-jewl filter">
                            <input type="checkbox" />
                            Jewelry
                        </label>

                        <label className="filter-mc filter">
                            <input type="checkbox" />
                            Men's Clothing
                        </label>

                        <label className="filter-wc filter">
                            <input type="checkbox" className="chkbx"/>
                            Women's Clothing
                        </label>

                        <button className="apply-btn">Apply</button>
                    </aside>

            </div>
        
        </div>
    )
};

export default Filters;