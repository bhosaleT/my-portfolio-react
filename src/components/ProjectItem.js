import React from 'react';

class ProjectItem extends React.Component{
    render(){
        return(
            <div>
            <h1>{this.props.project.name}</h1>
            <p>{this.props.project.descShort}</p>
            </div>
        )
    }
}

export default ProjectItem;