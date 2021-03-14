import React from 'react'

const FiltroDominio = () => {
    return (
        <>
            <div className="domain-extension-filter-wrap p-4 white-bg rounded">
                <div className="domain-filter-title">
                    <h5 className="mb-0">Filter Results <span className="ti-angle-down float-right"></span></h5>
                </div>
                <ul className="list-unstyled domain-filter-list mt-3">
                    <li className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />Show All
                        </label>
                    </li>
                    <li className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />.com
                        </label>
                    </li>
                    <li className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />.net
                        </label>
                    </li>
                    <li className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />.online
                        </label>
                    </li>
                    <li className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />.org
                        </label>
                    </li>
                    <li className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />.xyz
                        </label>
                    </li>
                    <li className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />.store
                        </label>
                    </li>
                    <li className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />.website
                        </label>
                    </li>
                    <li className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" value="" />.biz
                        </label>
                    </li>
                    <button type="submit" className="btn btn-block btn-outline-brand-01 btn-sm mt-3">Apply</button>
                </ul>
            </div>
        </>
    )
}

export default FiltroDominio
