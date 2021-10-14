import * as React from 'react' 
import {Link} from 'gatsby'

const ProjectContainer = ({projectInfo}) => {
    return (
        <div>
            <h2>{projectInfo.title}</h2>
            <Link to={projectInfo.url}>Click for live site</Link>
            <p>{projectInfo.description}</p>
        </div>
    )
}

export default ProjectContainer