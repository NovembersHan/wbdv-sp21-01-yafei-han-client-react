import React from 'react'

const ImageWidget = ({widget, setWidget, editing}) =>
    <div>
        {
            !editing &&
            <img width={widget.width} height={widget.height} src={widget.src}/>
        }
        {
            editing &&
            <>
                Image URL
                <input onChange={(e) => setWidget(widget => ({...widget, src: e.target.value}))} value={widget.src} className="form-control"/>
                Image width
                <input onChange={(e) => setWidget(widget => ({...widget, width: e.target.value}))} value={widget.width} className="form-control"/>
                Image height
                <input onChange={(e) => setWidget(widget => ({...widget, height: e.target.value}))} value={widget.height} className="form-control"/>
            </>
        }
    </div>

export default ImageWidget