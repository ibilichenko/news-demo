import React from 'react';
import 'antd/dist/antd.css';
import { Tag } from 'antd';


const FiltersEditor = ({data}:{data: string[]}) => {
  let params: string[] = [];
  if(data.length !== 0) {
    params = data[0].split(',')
  }
    return (      
      <>  
        {
          params.map((filter, index) => {
            return(
              <Tag key={index} closable onClose={() => window.location.href='/news/'}>
                {filter}
              </Tag>
            )
          })
        }
        
      </>
    )
}

export default FiltersEditor;