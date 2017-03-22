import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import * as ReactBootstrap from 'react-bootstrap';
import SearchInput, {createFilter} from 'react-search-input'


import Link from 'react-router'
import './Exzeo.scss'

class Exzeo extends React.Component{
  constructor(props){
    super(props);
    this.state={search_term:''};
    props.fetchData()
  }
  searchUpdated (term) {
    this.setState({search_term: term});
  }

  getListContainer=(data)=>{
    let songs = data.entry;
    let rightComponent = null;
    if (songs) {
      rightComponent = songs.map((Obj,key)=>{
        return(
          <Row key={key} className="songContainer">
            <Col sm={2} className="songComponent">
              <img src={Obj['im:image'][0].label} />
            </Col>
            <Col sm={6} className="songComponent">
               #{key+1}    {Obj['title'].label.substring(0,80)}...
            </Col>
            <Col sm={2} className="songComponent">
              {Obj['im:artist'].label}
            </Col>
            <Col sm={2} className="songComponent">
              {Obj['im:price'].label}
            </Col>
          </Row>
        )
      })
    }

    return rightComponent
  }
  getCategoryList=(data)=>{
    let component = null;
    if (data) {
      component = data.map((obj,key)=>{
        console.log(obj);
        return(<div>{obj}</div>)
      })
    }
    return component
  }
  render(){
    let data = this.props.data;
    let key_to_filter = ['title.label','im:artist.label'];
    let filteredList = null;
    let listData = null;
    let category=null;
    let categoryArr=null;
    let categoryList=null;
    let arr = [];
    if (data) {
      listData = data.entry.filter(createFilter(this.state.search_term,key_to_filter));
      category = data.entry.map((obj,key)=>{
        arr.push(obj.category.attributes.label)
        categoryArr=arr.filter( onlyUnique );
      })
      categoryList = this.getCategoryList(categoryArr)
    }
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    let listContainer = this.getListContainer(data);

    return(
      <div>
        {this.props.isLoading?<div>Loading...</div>:
          <div className="container">
            <Grid>
              <Row>
                <HeaderComponent data={data}/>
              </Row>
            </Grid>

            <Grid className="filters">
              {/*<Row>
                <Col sm={12}>
                  <div className="searchContainer">
                    <div className="searchIcon">
                      <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 31.42455 31.42455">
                        <path d="M30.77282,28.65165l-6.045-6.045a13.81039,13.81039,0,1,0-2.12071,2.121L28.652,30.77249a1.49966,1.49966,0,0,0,2.12084-2.12084ZM13.9915,24.77038A10.779,10.779,0,1,1,24.77019,13.99117,10.79129,10.79129,0,0,1,13.9915,24.77038Z"/>
                      </svg>
                    </div>
                    <div className="search">
                      <SearchInput className="searchInput" onChange={(term) => this.searchUpdated(term)} />
                    </div>
                  </div>
                </Col>
              </Row>*/}
              <Row>
                Category :
                <Col sm={12}>

                </Col>
              </Row>
            </Grid>

            <div className="bodyContainer">
              <Grid>

                  {listContainer}

              </Grid>

            </div>
          </div>
        }
      </div>
    )
  }
}

const HeaderComponent = ({data}) => {
  let component = null;
  if (data) {
    component = <Col sm={12} className="headerContainer">
      <img src={'https://img.clipartfox.com/4d79778ac417e79391a68012c946d06b_apple-logo-white-clip-art-clipart-hd-apple-logo_803-985.svg'} className="headerContainer_logo"/>
      <div className="headerContainer_title">{'data.title.label'}</div>
    </Col>
  }
  return component
}


export default Exzeo
