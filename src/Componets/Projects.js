import React from "react";


const ProjectList = [
  {
    Name: 'TodoList',
    Link: 'https://todolistath.netlify.app',
    Description: 'A list to keep track of your tasks.',
    Imglink: 'data:image/png;base64,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'
  },
  {
    Name: '4 in 1',
    Link: 'https://fourinone.netlify.app',
    Description: 'Translate/search/Accordion /dropdown',
    Imglink: 'https://images.macrumors.com/t/BVuEnRkdBi4REABJbmzS9xAeCGU=/1600x/article-new/2020/07/translate-icon-200x200.jpg'
  },
  {
    Name: 'GetcryptoPrices',
    Link: 'https://cryptopricesath.netlify.app',
    Description: 'Get latest cryto prices against USD',
    Imglink: 'https://m.foolcdn.com/media/dubs/original_images/original_imageshttpsg.foolcdn.comeditorialimages655229gettyimages-cryptocu.jpg'
  },
  {
    Name: 'ScoreKeeper',
    Link: 'https://scorekeeperath.netlify.app',
    Description: 'Keep track of your score',
    Imglink: 'https://play-lh.googleusercontent.com/20yLtUsrvhbvFTbwQBE5rT0ZyrN_pmXIz1aaXFELianWgYcdeXqNqwhbEZiGpAU_2vOM=w240-h480-rw'
  },
  {
    Name: 'YoutubeSearch',
    Link: 'https://youtubesearchath.netlify.app',
    Description: 'Search for and watch Youtube Videos',
    Imglink: 'https://www.adgully.com/img/800/202108/untitled-design-1_3.png.jpg'
  },
  {
    Name: 'Koung Gaming ',
    Link: 'https://kounggaming.netlify.app',
    Description: 'Work in Progress...',
    Imglink: 'https://pbs.twimg.com/profile_images/1509446920926035973/S5Z8verj_400x400.jpg'
  },
]

const renderedProjectList = ProjectList.map((item) => {
  return (
    <div className="projectitem">
      <a href={item.Link} target='_blank' rel="noreferrer">
      <div className="imgproj">
        <img src={item.Imglink} ></img>
      </div>
      <div className="title">
      {item.Name}
      </div>
      <div className="description">{item.Description}</div></a>
    </div>
  )
})

const Projects = () => {

  return (<React.Fragment>
    <div className="projectlist">
      
        {renderedProjectList}
      
    </div>
  </React.Fragment>
  )
}

export default Projects; 