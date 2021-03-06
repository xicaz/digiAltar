import { useDrag } from 'react-dnd';
const style = {
    position: 'absolute',
    backgroundColor: 'none',
    // padding: '0.5rem 1rem',
    cursor: 'move',
};
export default function Box ({ id, left, top, hideSourceOnDrag, children, }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "box",
        item: { id, left, top },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top]);
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>;
    }
    return (<div ref={drag} style={{ ...style, left, top }} role="Box">
			{children}
		</div>);
};
