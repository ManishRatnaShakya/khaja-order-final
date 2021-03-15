import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Nav, NavItem, NavLink, TabPane, TabContent, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
//Dropzone
import Dropzone from "react-dropzone";
import {
    changeName,
    changeEmail,
    changePassword ,
    changeAddress,
    changeCity ,
    changeState,
    changeZip ,
    changeContact1 ,
    changeContact2 ,
    changeTagline ,
    changeDescription ,
    changeFacebook,
    changeInstagram ,
    changePinterest,
    changeTwitter ,
    changeGoogleMap,
    changeLogo,
    changeCover,
    saveChanges
} from '../../store/Restuarant/actions';
//select
import Select from 'react-select';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import { compose } from 'redux';
import {
    makeSelectRestauntName,
    makeSelectRestauntEmail,
    makeSelectPassword,
    makeSelectAddress,
    makeSelectCity,
    makeSelectState,
    makeSelectZip,
    makeSelectContact1,
    makeSelectContact2,
    makeSelectTagline,
    makeSelectDescription,
    makeSelectFacebookURL,
    makeSelectInstagramURL,
    makeSelectPinterestURL,
    makeSelectTwitterURL,
    makeSelectGoogleMapURL
    
 } from '../../store/Restuarant/selectors';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Restuarant", link : "#" },
                { title : "Add Restuarant", link : "#" },
            ],
            activeTab: 1,
            selectedFiles: [],
            selectedFilesCover: [],
        }
       
        this.toggleTab = this.toggleTab.bind(this);
        this.handleAcceptedFiles = this.handleAcceptedFiles.bind(this);
    }
   
    handleAcceptedFiles = files => {
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
          })
        );
          
        this.setState({ selectedFiles: files });
        this.props.onChangeLogo(files);
      };
    handleAcceptedFilesCover = files => {
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
          })
        );
    
        this.setState({ selectedFilesCover: files });
        this.props.onChangeCover(files);
      };
    
      /**
       * Formats the size
       */
      formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
      };

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            if(tab >= 1 && tab <=3 ){
                this.setState({
                    activeTab: tab
                });
            }
        }
    }

    render() {
        const options = [
            { value : "TO", label : "Touchscreen" },
            { value : "CF", label : "Call Function" },
            { value : "NO", label : "Notifications" },
            { value : "FI", label : "Fitness" },
            { value : "OU", label : "Outdoor" },
        ]
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                    
                    <Breadcrumbs title="Add Product" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody>
                                        
                                        <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
                                            <Nav pills justified className="twitter-bs-wizard-nav">
                                                <NavItem>
                                                    <NavLink onClick={() => { this.toggleTab(1); }} className={classnames({ active: this.state.activeTab === 1 })}>
                                                        <span className="step-number">01</span>
                                                        <span className="step-title">Restuarant Info</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink onClick={() => { this.toggleTab(2); }} className={classnames({ active: this.state.activeTab === 2 })}>
                                                        <span className="step-number">02</span>
                                                        <span className="step-title">Restuarant Images</span>
                                                    </NavLink>
                                                </NavItem>
                                                
                                                <NavItem>
                                                    <NavLink onClick={() => { this.toggleTab(3); }} className={classnames({ active: this.state.activeTab === 3 })}>
                                                        <span className="step-number">03</span>
                                                        <span className="step-title">Social Media Information</span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent activeTab={this.state.activeTab} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1}>
                                                    <h4 className="card-title">Restuarant Information</h4>
                                                    <p className="card-title-desc">Fill all information below</p>

                                                    <Form>
                                                        <FormGroup>
                                                            <Label htmlFor="productname">Restuarant Name</Label>
                                                            <Input id="productname" onChange={this.props.onChangeName} name="productname" value={this.props.restuarantName} type="text" className="form-control"/>
                                                        </FormGroup>
                                                        <Row>
                                                            <Col lg={6}>
                                                                
                                                                <FormGroup>
                                                                    <Label htmlFor="manufacturername">Email Address</Label>
                                                                    <Input onChange={this.props.onChangeEmail} name="productname" value={this.props.restuarantEmail} type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col lg={6}>
                                                                
                                                                <FormGroup>
                                                                    <Label htmlFor="manufacturerbrand">Password</Label>
                                                                    <Input onChange={this.props.onChangePassword} value={this.props.password} type="password" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                            
                                                        </Row>
                                                        <Row>
                                                           
                                                            <Col >
                                                                <FormGroup>
                                                                    <Label htmlFor="address">Address</Label>
                                                                    <Input onChange={this.props.onChangeAddress} value={this.props.address} type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md={4}>
                                                                <FormGroup>
                                                                    <Label htmlFor="city">City</Label>
                                                                    <Input onChange={this.props.onChangeCity} value={this.props.city}  type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={4}>
                                                                <FormGroup>
                                                                    <Label className="control-label">State</Label>
                                                                    <select className="form-control select2" onChange={this.props.onChangeState} >
                                                                        <option>Select State</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={4}>
                                                                <FormGroup>
                                                                    <Label htmlFor="city">Zip Code</Label>
                                                                    <Input  onChange={this.props.onChangeZip} value={this.props.zip} type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Label htmlFor="Contact 1">Contact 1</Label>
                                                                    <Input  onChange={this.props.onChangeContact} value={this.props.contact1} type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={6}>
                                                                <FormGroup>
                                                                    <Label htmlFor="Contact 2">Contact 2</Label>
                                                                    <Input  onChange={this.props.onChangeContact2} value={this.props.contact2} type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <FormGroup>
                                                            <Label htmlFor="Tagline">Tagline</Label>
                                                            <textarea className="form-control"  onChange={this.props.onChangeTagline} value={this.props.tagline}  rows="5" placeholder="Write the Tagline"></textarea>
                                                        </FormGroup>
                                                        <FormGroup>
                                                            <Label htmlFor="description">Description</Label>
                                                            <textarea className="form-control" onChange={this.props.onChangeDescription} value={this.props.description} rows="5" placeholder="Take a note here"></textarea>
                                                        </FormGroup>
                                                    </Form>
                    
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                    <h4 className="card-title">Restuarant Logo</h4>
                                                    <p className="card-title-desc">Upload Restuarant Logo</p>
                                                    <Form>
                                                        <Dropzone
                                                            onDrop={acceptedFiles =>
                                                            this.handleAcceptedFiles(acceptedFiles)
                                                            }
                                                        >
                                                            {({ getRootProps, getInputProps }) => (
                                                            <div className="dropzone">
                                                                <div
                                                                className="dz-message needsclick mt-2"
                                                                {...getRootProps()}
                                                                >
                                                                <input {...getInputProps()} />
                                                                <div className="mb-3">
                                                                    <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                                                                </div>
                                                                <h4>Drop files here or click to upload.</h4>
                                                                </div>
                                                            </div>
                                                            )}
                                                        </Dropzone>
                                                        <div
                                                            className="dropzone-previews mt-3"
                                                            id="file-previews"
                                                        >
                                                            {this.state.selectedFiles.map((f, i) => {
                                                            return (
                                                                <Card
                                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                key={i + "-file"}
                                                                >
                                                                <div className="p-2">
                                                                    <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                        data-dz-thumbnail=""
                                                                        height="80"
                                                                        className="avatar-sm rounded bg-light"
                                                                        alt={f.name}
                                                                        src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                        to="#"
                                                                        className="text-muted font-weight-bold"
                                                                        >
                                                                        {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                        <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                    </Row>
                                                                </div>
                                                                </Card>
                                                            );
                                                            })}
                                                        </div>
                                                        <br/>
                                                        <br/>
                                                        <h4 className="card-title">Restuarant Cover Image</h4>
                                                        <p className="card-title-desc">Upload Restuarant cover images</p>
                                                        <Dropzone
                                                            onDrop={acceptedFiles =>
                                                            this.handleAcceptedFilesCover(acceptedFiles)
                                                            }
                                                        >
                                                            {({ getRootProps, getInputProps }) => (
                                                            <div className="dropzone">
                                                                <div
                                                                className="dz-message needsclick mt-2"
                                                                {...getRootProps()}
                                                                >
                                                                <input {...getInputProps()} />
                                                                <div className="mb-3">
                                                                    <i className="display-4 text-muted ri-upload-cloud-2-line"></i>
                                                                </div>
                                                                <h4>Drop files here or click to upload.</h4>
                                                                </div>
                                                            </div>
                                                            )}
                                                        </Dropzone>
                                                        <div
                                                            className="dropzone-previews mt-3"
                                                            id="file-previews"
                                                        >
                                                            {this.state.selectedFilesCover.map((f, i) => {
                                                            return (
                                                                <Card
                                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                                key={i + "-file"}
                                                                >
                                                                <div className="p-2">
                                                                    <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                        data-dz-thumbnail=""
                                                                        height="80"
                                                                        className="avatar-sm rounded bg-light"
                                                                        alt={f.name}
                                                                        src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                        to="#"
                                                                        className="text-muted font-weight-bold"
                                                                        >
                                                                        {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                        <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                    </Row>
                                                                </div>
                                                                </Card>
                                                            );
                                                            })}
                                                        </div>
                                                        </Form>

                                                </TabPane>
                                                <TabPane tabId={3}>
                                                    <h4 className="card-title">Meta Data</h4>
                                                    <p className="card-title-desc">Fill all information below</p>

                                                    <Form>
                                                        <Row>
                                                            <Col sm={3}>
                                                                <FormGroup>
                                                                    <Label htmlFor="metatitle">Facebook URL</Label>
                                                                    <Input  onChange={this.props.onChangeFacebook} value={this.props.facebookURL} type="text" className="form-control"/>
                                                                </FormGroup>
                                                                
                                                            </Col>
                    
                                                            <Col sm={3}>
                                                                <FormGroup>
                                                                    <Label htmlFor="metakeywords">Instagram URL</Label>
                                                                    <Input  onChange={this.props.onChangeInstagram} value={this.props.instagramURL} type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                            <Col sm={3}>
                                                                <FormGroup>
                                                                    <Label htmlFor="metatitle">Pinterest URL</Label>
                                                                    <Input  onChange={this.props.onChangePinterest} value={this.props.pinterestURL} type="text" className="form-control"/>
                                                                </FormGroup>
                                                                
                                                            </Col>
                    
                                                            <Col sm={3}>
                                                                <FormGroup>
                                                                    <Label htmlFor="metakeywords">Twitter URL</Label>
                                                                    <Input  onChange={this.props.onChangeTwitter} value={this.props.twitterURL} type="text" className="form-control"/>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>

                                                        <FormGroup>
                                                            <Label htmlFor="metadescription">Your Location On Google Map</Label>
                                                            <textarea className="form-control"  onChange={this.props.onChangeGoogleMap} value={this.props.googlemapURL}id="metadescription" rows="5" placeholder="Share your map loaction with the link to Google map"></textarea>
                                                        </FormGroup>
                                                    </Form>

                                                    <div className="text-center mt-4">
                                                        <Button color="primary" type="submit" onClick={this.props.onSubmit} className="mr-2 waves-effect waves-light">Save Changes</Button>
                                                        <Button color="light" type="submit" className="waves-effect ml-1">Cancel</Button>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                            <li className={this.state.activeTab === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab - 1);} }>Previous</Link></li>
                                                <li className={this.state.activeTab === 3 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab + 1);} }>Next</Link></li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps =createStructuredSelector({
    restuarantName: makeSelectRestauntName(),
    restuarantEmail:makeSelectRestauntEmail(),
    pasword:makeSelectPassword(),
    address:makeSelectAddress(),
    city:makeSelectCity(),
    state:makeSelectState(),
    zip:makeSelectZip(),
    contact1:makeSelectContact1(),
    contact2:makeSelectContact2(),
    tagline:makeSelectTagline(),
    description:makeSelectDescription(),
    facebookURL:makeSelectFacebookURL(),
    instagramURL:makeSelectInstagramURL(),
    pinterestURL:makeSelectPinterestURL(),
    twitterURL:makeSelectTwitterURL(),
    googlemapURL:makeSelectGoogleMapURL(),

})
const mapDispatchToProps =(dispatch)=>{ 
    return {
        onChangeName: evt=>dispatch(changeName(evt.target.value)),
        onChangeEmail: evt=>dispatch(changeEmail(evt.target.value)),
        onChangePassword: evt=>dispatch(changePassword(evt.target.value)),
        onChangeAddress: evt=>dispatch(changeAddress(evt.target.value)),
        onChangeCity: evt=>dispatch(changeCity(evt.target.value)),
        onChangeState: evt=>dispatch(changeState(evt.target.value)),
        onChangeZip: evt=>dispatch(changeZip(evt.target.value)),
        onChangeContact: evt=>dispatch(changeContact1(evt.target.value)),
        onChangeContact2: evt=>dispatch(changeContact2(evt.target.value)),
        onChangeTagline: evt=>dispatch(changeTagline(evt.target.value)),
        onChangeDescription: evt=>dispatch(changeDescription(evt.target.value)),
        onChangeFacebook: evt=>dispatch(changeFacebook(evt.target.value)),
        onChangeInstagram: evt=>dispatch(changeInstagram(evt.target.value)),
        onChangePinterest: evt=>dispatch(changePinterest(evt.target.value)),
        onChangeTwitter: evt=>dispatch(changeTwitter(evt.target.value)),
        onChangeGoogleMap: evt=>dispatch(changeGoogleMap(evt.target.value)),
        onChangeLogo:(logo)=>dispatch(changeLogo(logo)),
        onChangeCover:(cover)=>dispatch(changeCover(cover)),
        onSubmit:()=>dispatch(saveChanges()),
    }
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddProduct);