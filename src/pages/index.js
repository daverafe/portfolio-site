import * as React from 'react'
import Layout from '../components/layout'
import ProjectContainer from '../components/ProjectContainer'

const IndexPage = () => {

 const artMarket = {
    title: "Art Market",
    image: "https://img.icons8.com/plasticine/2x/react.png",
    url: "https://epic-allen-47afe0.netlify.app/",
    description: "Marketplace / E-commerce application where users can browse and search through various local art pieces for purchase, and set up an account to upload and sell their own pieces of art."
}
const queue = {
    title: "Queue",
    image: "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/158/Ruby_on_Rails_2-256.png",
    url: "https://stormy-reaches-82175.herokuapp.com/",
    description: "A TV/Movie/Media recommendation app where users can create an account, and recommend content to other users that will populate on their profiles. "
}
const lifestyleRoster =  {
    title: "Lifetsyle Roster",
    image: "https://cdn.iconscout.com/icon/free/png-128/javascript-1-225993.png",
    url: "https://vigorous-hoover-20c685.netlify.app/",
    description: "Pinterest / Registry style app that allows you to set up categorized rosters of all your favorite items from across the web, creating gift or lifestyle inspiration. "
}

  return (
    <Layout pageTitle="Projects">
      <ProjectContainer projectInfo={artMarket}></ProjectContainer>
      <ProjectContainer projectInfo={queue}></ProjectContainer>
      <ProjectContainer projectInfo={lifestyleRoster}></ProjectContainer>
    </Layout>
  )
}
export default IndexPage