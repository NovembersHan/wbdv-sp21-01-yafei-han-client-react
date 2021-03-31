import React, {useState} from 'react'

const ListWidget = ({widget, setWidget, editing}) => {
    const [widget2, setWidget2] = useState(widget)
    return(
        <div>
            {
                editing &&
                <>
                    <input checked={widget2.ordered}
                           onClick={() => {widget.ordered = !widget.ordered;
                           setWidget2(widget2 => ({...widget2, ordered: widget2.ordered}));}}
                           type="checkbox"/> Ordered
                    <br/>
                    List items
                    <textarea
                        onChange={(e) => setWidget({...widget, text: e.target.value})}
                        value={widget.text}
                        rows={10}
                        className="form-control"></textarea>
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