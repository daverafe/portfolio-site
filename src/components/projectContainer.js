import * as React from 'react' 
import {Link} from 'gatsby'

const ProjectContainer = ({projectInfo}) => {
    return (
        <div id={projectInfo.title.toLowerCase()}>
            <Link to={projectInfo.url}><img src={projectInfo.image} alt="tech icon"/></Link>
            <Link to={projectInfo.url}><h2>{projectInfo.title}</h2></Link>
            <p>{projectInfo.description}</p>
        </div>
    )
}

export default ProjectContainer