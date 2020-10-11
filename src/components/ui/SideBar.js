import React, {useState} from 'react';
import { Collapse, Button } from 'react-bootstrap';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const handleChange = event => {
        console.log(event);
    }

    return (
        <>
            <div className="sidebar-block px-3 px-lg-0">
                <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="link"
                block
                className="d-lg-none block-toggler">
                    Product Categories
                    <span className="block-toggler-icon"></span>
                </Button>
                <Collapse in={open}>
                    <div>
                    <div className="expand-lg collapse show">
                    <h5 className="sidebar-heading d-none d-lg-block">Category</h5>
                    <div className="sidebar-icon-menu mt-4 mt-lg-0">
                        <div className="sidebar-icon-menu-item">
                            <div
                            className="d-flex align-items-center justify-content-around" onClick={() => setOpen1(!open1)}>
                                <div
                                className="sidebar-icon-menu-link font-weight-bold mr-2">
                                    Trousers
                                </div>
                                <span className="sidebar-icon-menu-count">120</span>
                                {open1 ? <FaAngleDown/> : <FaAngleRight/>}
                            </div>
                            <Collapse in={open1}>
                                <ul className="sidebar-icon-menu sidebar-icon-submenu">
                                    <li className="sidebar-icon-submenu-item">
                                        <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            Lorem Ipsum
                                        </Link>
                                    </li>
                                    <li className="sidebar-icon-submenu-item">
                                    <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            dolor
                                        </Link>
                                    </li>
                                    <li className="sidebar-icon-submenu-item">
                                        <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            sit amet
                                        </Link>
                                    </li>
                                    <li className="sidebar-icon-submenu-item">
                                    <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            vitae
                                        </Link>
                                    </li>
                                </ul>
                            </Collapse>
                        </div>

                        <div className="sidebar-icon-menu-item">
                            <div
                            className="d-flex align-items-center justify-content-around" onClick={() => setOpen2(!open2)}>
                                <div
                                className="sidebar-icon-menu-link font-weight-bold mr-2">
                                    Jackets
                                </div>
                                <span className="sidebar-icon-menu-count">55</span>
                                {open2 ? <FaAngleDown/> : <FaAngleRight/>}
                            </div>
                            <Collapse in={open2}>
                                <ul className="sidebar-icon-menu sidebar-icon-submenu">
                                    <li className="sidebar-icon-submenu-item">
                                        <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            Lorem Ipsum
                                        </Link>
                                    </li>
                                    <li className="sidebar-icon-submenu-item">
                                    <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            dolor
                                        </Link>
                                    </li>
                                    <li className="sidebar-icon-submenu-item">
                                        <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            sit amet
                                        </Link>
                                    </li>
                                    <li className="sidebar-icon-submenu-item">
                                    <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            vitae
                                        </Link>
                                    </li>
                                </ul>
                            </Collapse>
                        </div>

                        <div className="sidebar-icon-menu-item">
                            <div
                            className="d-flex align-items-center justify-content-around" onClick={() => setOpen3(!open3)}>
                                <div
                                className="sidebar-icon-menu-link font-weight-bold mr-2">
                                    T-Shirts
                                </div>
                                <span className="sidebar-icon-menu-count">33</span>
                                {open3 ? <FaAngleDown/> : <FaAngleRight/>}
                            </div>
                            <Collapse in={open3}>
                                <ul className="sidebar-icon-menu sidebar-icon-submenu">
                                    <li className="sidebar-icon-submenu-item">
                                        <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            Lorem Ipsum
                                        </Link>
                                    </li>
                                    <li className="sidebar-icon-submenu-item">
                                    <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            dolor
                                        </Link>
                                    </li>
                                    <li className="sidebar-icon-submenu-item">
                                        <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            sit amet
                                        </Link>
                                    </li>
                                    <li className="sidebar-icon-submenu-item">
                                    <Link
                                        to="#"
                                        className="sidebar-icon-submenu-link link-animated link-animated-light">
                                            vitae
                                        </Link>
                                    </li>
                                </ul>
                            </Collapse>
                        </div>
                    </div>
                </div>
                    </div>
                </Collapse>
            </div>
            <div className="sidebar-block px-3 px-lg-0">
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="link"
                block
                className="d-lg-none block-toggler">
                    Filter By Price
                    <span className="block-toggler-icon"></span>
                </Button>
                <Collapse in={open}>
                    <div>
                        <h5 className="sidebar-heading d-none d-lg-block">Price</h5>
                        <div className="mt-4 mt-lg-0">
                            <Range
                            defaultValue={[0, 10]}
                            allowCross={false}
                            min={0}
                            max={100}
                            pushable
                            onChange={handleChange}
                            />
                            <div className="range-tooltip">
                                <span>From $30</span>
                                <span>To $200</span>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
            <div className="sidebar-block px-3 px-lg-0">

            </div>
            <div className="sidebar-block px-3 px-lg-0">

            </div>
            <div className="sidebar-block px-3 px-lg-0">

            </div>
        </>
    )
}

export default SideBar;
