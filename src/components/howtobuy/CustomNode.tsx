// import { memo } from 'react';
import { Handle, Position } from 'reactflow';


const CustomNode = ({data}) => {
    return ( 
        <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400 ">
        <div className="flex w-96 justify-center items-center flex-col ">
          <div className="rounded-full w-16 h-10 flex justify-center items-center bg-sky-300">
            {data.icon}
          </div>
          <div className="ml-2">
            <div className="text-gray-800 text-left">{data.task}</div>
          </div>
        </div>
  
        <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
        <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
      </div>
     );
}
 
export default CustomNode;