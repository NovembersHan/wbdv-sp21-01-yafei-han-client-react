import React from 'react'

const ListWidget = ({widget, setWidget, editing}) => {
    return(
        <div>
            {
                editing &&
                <>
                    <input checked={widget.ordered} onClick={() => {widget.ordered = !widget.ordered}} type="checkbox"/> Ordered
                    <br/>
                    List items
                    <textarea
                        onChange={(e) => setWidget({...widget, text: e.target.value})}
                        value={widget.text}
                        rows={10}
                        className="form-control"></textarea>
                    {/*{JSON.stringify(widget)}*/}
                </>
            }
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}

export default ListWidget