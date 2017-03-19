import React from 'react'
import Link from 'react-router'
import './NewsApp.scss'

class NewsApp extends React.Component{
  constructor(props){
    super(props);
    props.onSourceChange();
  }
  onClickFetchSources=()=>{
    this.props.onSourceChange();
  }
  onClickSourceFetchNews=(id)=>{
    this.props.onClickSourceFetchNews(id);
  }
  render(){
    let that = this;
    let news = that.props.news;
    let sources = that.props.source.sources;
    let leftContainer = null;
    let rightContainer = null;
    if (sources) {
      leftContainer = Object.keys(sources).map((Obj,key)=>{
        let item = sources[Obj];
        return(
          <div key={key} className="sourceComponentContainer" onClick={()=>this.onClickSourceFetchNews(item.id)}>
                <img src={item.urlsToLogos.small} className="sourceComponent_logo"/>
                <div className="sourceComponent_title">{item.name}</div>
          </div>
        )
      })
    }
    if (news) {
      let article = news.articles;
      if (article) {
        rightContainer = article.map((Obj,key)=>{
          console.log(Obj);
          return(
            <div key={key} className="newsComponentContainer">
              <img src={Obj.urlToImage} className="newsComponent_image"/>
              <div className="newsComponent_title">{Obj.title}</div>
            </div>
          )
        })
      }

    }
    return(
      <div className="container">

        <div className="newsContainer">
          <div className="leftContainer_component">
            <div className="headerComponent">
              Daily News
            </div>
            <div className="leftContainer">{leftContainer}</div>
          </div>

          <div className="rightContainer">
            {rightContainer}
          </div>
        </div>
      </div>
    )
  }
}

export default NewsApp
