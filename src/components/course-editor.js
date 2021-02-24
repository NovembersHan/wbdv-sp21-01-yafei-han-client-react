import React from 'react'

const CourseEditor = ({history}) =>
    <div className = "container" >
        <div>
            <i onClick={() => history.goBack()}
               className="fas fa-2x fa-times"></i>
        </div>

        <h1> Editor </h1>

        <div className="row">
            <div className="col-4">
                <ul className="list-group">
                    <li className="list-group-item active">
                        Module 1-jQuery
                        <i className="float-right fa fa-times-circle"></i>
                    </li>
                    <li className="list-group-item">
                        Module 2-React
                        <i className="float-right fa fa-times-circle"></i>
                    </li>
                    <li className="list-group-item">
                        Module 3-Redux
                        <i className="float-right fa fa-times-circle"></i>
                    </li>
                    <li className="list-group-item">
                        Module 4-Native
                        <i className="float-right fa fa-times-circle"></i>
                    </li>
                    <li className="list-group-item">
                        Module 5-Angular
                        <i className="float-right fa fa-times-circle"></i>
                    </li>
                    <li className="list-group-item">
                        Module 6-Node
                        <i className="float-right fa fa-times-circle"></i>
                    </li>
                    <li className="list-group-item">
                        Module 7-Mongo
                        <i className="float-right fa fa-times-circle"></i>
                    </li>
                </ul>
            </div>
            <div className="col-8">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Build
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-plus"></i>
                        </a>
                    </li>
                </ul>

                <br/>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 4</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-plus"></i>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
</div>

export default CourseEditor