import React, { Component } from 'react';
import axios from 'axios';
import browserHistory from '../config/browserHistory'
import LoadingOverlay from 'react-loading-overlay';

class List extends Component {
	state={
		list:[],
		isLoading:false
  }
  
	componentDidMount(){
		this.setState({isLoading:true})
		this.getList();
	}

	getList = () => {

    var fd = new FormData();
    fd.append('tag', 'items');
    fd.append('classic_type', 'false');

    var config = {
      method: 'post',
      url: 'https://cors-anywhere.herokuapp.com/http://150.129.62.46:8081/raithaa/items.php',
      headers: { 'Content-Type': 'multipart/form-data' },
      data : fd
    };

    axios(config).then(res=>{
      this.setState({list:res.data.items})
			console.log(this.state.list);
			this.setState({isLoading:false})
    }).catch(err=>{
			console.log(err);
			this.setState({isLoading:false})
    })
	}
	
	viewList = (listItem) => {
		browserHistory.push({pathname:'/list/view/'+listItem.ads_id, state: {listItem : listItem}})
	} 
  
	render() {
		return (
			<div className="container-fluid pt-5 mt-2">
				<LoadingOverlay active={this.state.isLoading} spinner styles={{overlay: (base) => ({ ...base, position: 'fixed', })}}></LoadingOverlay>
				<h2 className='text-center'>ITEM LIST</h2>
				<div className='row'>
					{this.state.list.map(item => {
						return(
							<div className='col-4 mb-5 '>
								<div className='m-1 cshadow'>
									<div className='media p-2'>
                    <img className="mr-4 generic_image rounded-circle ishadow p-2 m-3" 
                      src={item.image} width='150px' height='150px'/>
										<div className='media-body '>
											<span className="text-dark h5">{item.name}</span>
											<span className="text-secondary h6" style={{float:"right"}}>{item.category}</span>
                      <hr/>
											<u className=" mb-3 h6 text-secondary">Address</u>
											<span className=" mb-3" style={{color: 'rgba(0, 0, 0, 0.5)', fontSize:'15px', float:'right'}}>Rs. {item.price}</span>
											<div style={{color: 'rgba(0, 0, 0, 0.5)', fontSize:'15px'}}>
												<span>{item.location},</span><br/>
												<span>{item.village},</span><br/>
												<span>{item.taluk},</span><br/>
												<span>{item.district},</span>
											</div>
												<button className="btn btn-sm btn-info mt-2 mr-2 float-right" onClick={()=>this.viewList(item)}>
													<i className="fa fa-eye" aria-hidden="true"></i> View 
												</button>
										</div>
									</div>
								</div>	
							</div>
						)
					})}
				</div>
      </div>
		);
	}
}

export default List;
