import React, { Component } from 'react';

class ViewList extends Component {
	render() {
		return (
			<div className="container">
				<div className='row mt-5 p-5 cshadow'>
					<div className="col-md-6 col-sm-12">
						<table className="table table-simple">
							<tbody>
								<tr>
									<td>ads_id:</td>
									<th>{ this.props.location.state.listItem.ads_id }</th>
								</tr>
								<tr>
									<td>category:</td>
									<th>{ this.props.location.state.listItem.category }</th>
								</tr>
								<tr>
									<td>created_at:</td>
									<th>{ this.props.location.state.listItem.created_at }</th>
								</tr>
								<tr>
									<td>description:</td>
									<th>{ this.props.location.state.listItem.description }</th>
								</tr>
								<tr>
									<td>id:</td>
									<th>{ this.props.location.state.listItem.id }</th>
								</tr>
								<tr>
									<td>name:</td>
									<th>{ this.props.location.state.listItem.name }</th>
								</tr>
								<tr>
									<td>is_active:</td>
									<th>{ this.props.location.state.listItem.is_active }</th>
								</tr>
								<tr>
									<td>priceuom:</td>
									<th>{ this.props.location.state.listItem.priceuom }</th>
								</tr>
								<tr>
									<td>location:</td>
									<th>{ this.props.location.state.listItem.location }</th>
								</tr>
								<tr>
									<td>taluk:</td>
									<th>{ this.props.location.state.listItem.taluk }</th>
								</tr>
								<tr>
									<td>state:</td>
									<th>{ this.props.location.state.listItem.state }</th>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-md-6 col-sm-12">
						<table className="table table-simple">
							<tbody>
								<tr>
									<td>brand:</td>
									<th>{ this.props.location.state.listItem.brand }</th>
								</tr>
								<tr>
									<td>classic_type:</td>
									<th>{ this.props.location.state.listItem.classic_type }</th>
								</tr>
								<tr>
									<td>created_on:</td>
									<th>{ this.props.location.state.listItem.created_on }</th>
								</tr>
								<tr>
									<td>status:</td>
									<th>{ this.props.location.state.listItem.status }</th>
								</tr>
								<tr>
									<td>seller_id:</td>
									<th>{ this.props.location.state.listItem.seller_id }</th>
								</tr>
								<tr>
									<td>Quantity:</td>
									<th>{ this.props.location.state.listItem.qty }</th>
								</tr>
								<tr>
									<td>price:</td>
									<th>{ this.props.location.state.listItem.price }</th>
								</tr>
								<tr>
									<td>uom:</td>
									<th>{ this.props.location.state.listItem.uom }</th>
								</tr>
								<tr>
									<td>location:</td>
									<th>{ this.props.location.state.listItem.village }</th>
								</tr>
								<tr>
									<td>taluk:</td>
									<th>{ this.props.location.state.listItem.district }</th>
								</tr>
								<tr>
									<td>state:</td>
									<th>{ this.props.location.state.listItem.pincode }</th>
								</tr>
							</tbody>
						</table>
					</div>
					<a href='/' className='btn btn-secondary'>Back</a>
				</div>
			</div>
		);
	}
}

export default ViewList;
