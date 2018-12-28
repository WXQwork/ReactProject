import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    SignMain
} from './styledConponents'

import {
    GET_ISSIGN_DATA
} from '../actionTypes'

import { withRouter } from 'react-router-dom'
import { Tabs,WhiteSpace, Toast } from 'antd-mobile'

import loginTop from 'images/loginTop.gif'
import close from 'images/close.png'
import eye from 'images/eye.png'
import eyeOn from 'images/eyeOn.png'
import refresh from 'images/refresh.png'
import errorMsg from 'images/errorMsg.png'

const mapDispatch = (dispatch)=>{
    return {
        loadCategories (issign) {
            dispatch({
                type:GET_ISSIGN_DATA,
                issign
              })
        }
    }
}

class SignConenter extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError: false,
            value: '',
            password:'',
            isclose:false,
            iseye:true,
            allok:false,
            yanzhen:'',
            allyanzhengok:false,
            setMyImg:{},
            ismodel:false,
            errorMsg:true,
            timeryanzhen:false,
            daojishi:60
        }
        this.onChange = this.onChange.bind(this)
        this.onChanges = this.onChanges.bind(this)
        this.onblur = this.onblur.bind(this)
        this.myeyes = this.myeyes.bind(this)
        this.onChang = this.onChang.bind(this)
        this.focus = this.focus.bind(this)
        this.setImg = this.setImg.bind(this)
        this.refresh = this.refresh.bind(this)
        this.tupianclick = this.tupianclick.bind(this)
        this.register = this.register.bind(this)
    }
    render(){
        const tabs = [
            { title: '密码登录' },
            { title: '短信登录' }
        ];
        return (
            <SignMain>
                <div className="login-top">
                    <img src={loginTop} alt=""/>
                    <img onClick={()=>this.props.history.go(-1)} src={close} alt="" className="close"></img>
                </div>
                <WhiteSpace />
                    <div style={{ height: '100%',backgroundColor:'#fff' }}>
                    <Tabs tabs={tabs}
                        initalPage={'t2'}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: '250px', backgroundColor: '#fff' }}>
                            <div className="login-main">
                                <div className="group-input">
                                    <input type="text" placeholder="输入手机号" maxLength="13" id="Muser" 
                                        value={this.state.value}
                                        onChange={this.onChange}
                                        onBlur={this.onblur} 
                                    />
                                    <div className="icon">
                                        {
                                            this.state.isclose===false?null:
                                                <img onClick={()=>this.setState({value:''})} src={close} alt="" />
                                        }
                                    </div>
                                </div>
                                <div className="group-input">
                                    <input className="noborder" type={this.state.iseye===true?'password':'text'} placeholder="输入密码" id="password" 
                                        value={this.state.password}
                                        onChange={this.onChanges} 
                                    />
                                    <div className="eye">
                                        <img onClick={this.myeyes} src={this.state.iseye===true?eye:eyeOn} alt=""/>
                                    </div>
                                </div>
                                <button className={this.state.allok===true?'btnliang':'btnhui'}>登录</button>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: '250px', backgroundColor: '#fff' }}>
                            <div className="login-main">
                                <div className="group-input">
                                    <input type="text" placeholder="输入手机号" maxLength="13" id="Musers" 
                                        value={this.state.value}
                                        onChange={this.onChange}
                                        onBlur={this.onblur}
                                        onFocus={this.focus} 
                                    />
                                    <div className="icon">
                                        {
                                            this.state.isclose===false?null:
                                                <img onClick={()=>this.setState({value:''})} src={close} alt="" />
                                        }
                                    </div>
                                </div>
                                <div className="group-input">
                                    <input className="noborder" type='text' placeholder="输入验证码" id="yanzhen" 
                                        value={this.state.yanzhen}
                                        onChange={this.onChang}
                                    />
                                    <div onClick={this.setImg} className={this.state.hasError===true?'buttonactove button':'buttonnor button'}>
                                        {
                                            this.state.timeryanzhen===false?'获取验证码':this.state.daojishi+'s'
                                        }
                                    </div>
                                </div>
                                <button onClick={this.register} className={this.state.allyanzhengok===true?'btnliang':'btnhui'}>登录</button>
                                <p className="msg-noLogin">未注册用户，系统自动为您注册</p>
                            </div>
                        </div>
                    </Tabs>
                    </div>
                <div className={
                    this.state.ismodel===true?'model modelxiashi':'model modelno'
                    }>
                    <div className="imgCode-main">
                        <h1>请选择一个不同的图片<span onClick={this.refresh}><img src={refresh} alt=""/>刷新</span></h1>
                        <div className="main-img">
                            {
                                this.state.setMyImg.images===undefined?null:
                                this.state.setMyImg.images.map((val,index)=>{
                                    let newarr = this.state.value.replace(/\s+/g,"")
                                    let str = `http://api9.wochu.cn/client/v1/member/verificationcode/getImgUrl?imgCode=${val.Id}&mobilePhone=${newarr}`
                                    // return (<img onClick={(id)=>{
                                    //         console.log(id)
                                   
                                    // }} key={index} src={str} alt=""/>)
                                    return <img onClick={()=>this.tupianclick(val.Id)} key={index} src={str} alt=""/>
                                })
                            }
                        </div>
                            {
                                this.state.errorMsg===true?null:
                                (<div className="error">
                                    <img src={errorMsg} alt=""/>选择错误，请重新勾选
                                </div>   )
                            }
                    </div> 
                </div>
            </SignMain>
        )
    }
    myeyes(){
        this.setState({
            iseye:!this.state.iseye
        })
    }
    onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
    }
    focus(event){
        let newarr = event.target.value.replace(/\s+/g,"")
        let ref = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (ref.test(newarr)) {
            this.setState({
                hasError: true,
            })
        }else{
            this.setState({
                hasError: false,
            })
        }
    }
    onblur (event) {
        let newarr = event.target.value.replace(/\s+/g,"")
        let ref = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (ref.test(newarr)) {
            this.setState({
                hasError: true,
            })
        }else{
            this.setState({
                hasError: false,
            })
            Toast.info('请输入正确的手机号', 1);
        }
    }
    onChang(event){
        this.setState({yanzhen:event.target.value})
        if(event.target.value.length>0&&this.state.value.length>0){
            this.setState({
                allyanzhengok:true
            })
        }else{
            this.setState({
                allyanzhengok:false
            })
        }
        
    }
    onChange = (event) => {
        let ref = /^[0-9,' ']*$/
        if (ref.test(event.target.value)) {
          this.setState({value: event.target.value})
        }
        if(event.target.value.length>0){
            this.setState({isclose:true})
        }else{
            this.setState({isclose:false})
        }
        if(event.target.value.length===3||event.target.value.length===8){
            this.setState({value: event.target.value+' '})
        }
    }
    onChanges = (event) => {
        if(event.target.value.length>0&&this.state.value.length>0){
            this.setState({
                allok:true
            })
        }else{
            this.setState({
                allok:false
            })
        }
        this.setState({password: event.target.value})
    }
    async setImg(){
        if(!this.state.timeryanzhen){
            let newarr = this.state.value.replace(/\s+/g,"")
            let dog = await fetch('http://api9.wochu.cn/client/v1/member/verificationcode/send?parameters=%7B%22mobilePhone%22:%22'+newarr+'%22,%22isRefresh%22:%22false%22,%22type%22:%22A%22%7D')
                .then(response=>response.json())
                .then(result=>{
                    return result.data
                })
            console.log(dog)
            this.setState({
                ismodel:true,
                setMyImg:dog
            })
        }else{
            Toast.info('请您'+this.state.daojishi+"后再获取!");
        }
    }
    async refresh(){
        let newarr = this.state.value.replace(/\s+/g,"")
        let dog = await fetch('http://api9.wochu.cn/client/v1/member/verificationcode/send?parameters=%7B%22mobilePhone%22:%22'+newarr+'%22,%22isRefresh%22:%22true%22,%22type%22:%22A%22%7D')
            .then(response=>response.json())
            .then(result=>{
                return result.data
            })
        console.log(dog)
        this.setState({
            ismodel:true,
            setMyImg:dog
        })
    }
    async tupianclick(id){
        let newarr = this.state.value.replace(/\s+/g,"")
        let meizizi = await fetch('http://api9.wochu.cn/client/v1/member/verificationcode/check?parameters=%7B%22mobilePhone%22:%22'+newarr+'%22,%22imgCode%22:%22'+id+'%22,%22type%22:%22A%22%7D')
            .then(response=>response.json())
            .then(result=>{
                console.log(result)
                return result.data.code
            })
        if(meizizi==='1001'){
            console.log("错误")
            this.refresh()
            this.setState({
                errorMsg:false
            })
        }else{
            this.setState({
                errorMsg:true,
                ismodel:false
            })
            console.log(newarr)
            console.log("正确")
            let setis = await fetch('/users/setcode?phone='+newarr)
                .then(response=>response.json())
                .then(result=>{
                    console.log(result)
                    return result
                })
            //留个口
            console.log(setis)
            if(setis.ret){
                console.log('设置可以登录')
                Toast.info('验证码以发送，请您注意查收！', 1);
                this.setState({
                    timeryanzhen:true,
                    hasError:false
                })
                this.time = setInterval(()=>{
                    let num = this.state.daojishi
                    this.setState({
                        daojishi:num-1
                    })
                    if(num===0){
                        clearInterval(this.time)
                        this.setState({
                            timeryanzhen:false,
                            hasError:true
                        })
                    }
                },1000)
            }else{
                console.log('设置不可以登录')
            }
            
        }
    }
    async register(){
        let newarr = this.state.value.replace(/\s+/g,"")
        // let fd = new FormData();
        // fd.append('phone', newarr);
        // fd.append('issign', this.state.yanzhen);
        // let obj = {
        //     'phone':newarr,
        //     'issign':this.state.yanzhen
        // }
        await fetch('/users/register',{
                    method:'POST',
                    //mode : 'cors',
                    headers:{
                        'Accept': 'application/json',
                        // "Content-Type":"application/json;charset=utf8"
                        //不能写charset=utf8
                        "Content-Type":"application/x-www-form-urlencoded"
                     },
                    body:`phone=${newarr}&issign=${this.state.yanzhen}`
                    // body:JSON.stringify(obj)
                    //body:`phone=${phone}&+issign=${this.state.yanzhen}`
                })
                .then(response=>response.json())
                .then(result=>{
                    console.log(result)
                    if(result.ret){
                        this.props.loadCategories('true')
                        Toast.info('登录成功');
                        this.props.history.push('/home')
                    }else{
                        Toast.info('验证码错误，请重新输入！',2);
                    }
                })
    }
}

export default withRouter(connect(null,mapDispatch)(SignConenter))