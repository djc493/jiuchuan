import React from 'react';
import {Icon, Form, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom';

var LoginCss = require('./login.css');

class LoginPage extends React.Component{
	constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
        }
    }
    changeValue = e=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    login = e=>{
        if (this.state.username=='123'&&this.state.password=='123') {
            // alert('登陆成功');
            window.localStorage.setItem("username","追运");
            window.localStorage.setItem("token","11111");

            this.props.history.push('/adminhomepage')
        }else{
            // alert('登陆失败');
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render(){
		const {getFieldDecorator}=this.props.form;
        return(
            <div className={LoginCss.page}>
                <div className={LoginCss.box}>
                    <p className={LoginCss.font}>用户登录</p>
                    <Form onSubmit={this.handleSubmit} className={LoginCss.form}>
                        <Form.Item className={LoginCss.item1}>
                        {getFieldDecorator('username', {
                            rules: [
                                { 
                                required: true, 
                                message: '请输入您的账号！' 
                                },
                            ],
                        })(
                            <Input className={LoginCss.input}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="账号"
                            name="username" id="username" value={this.state.username}
                            onChange={this.changeValue}/>,
                        )}
                        </Form.Item>
                        <Form.Item className={LoginCss.item1}>
                        {getFieldDecorator('password', {
                            rules: [
                                { 
                                required: true, 
                                message: '请输入您的密码！' 
                                },
                            ],
                        })(
                            <Input className={LoginCss.input}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            name="password" id="password" value={this.state.password}
                            onChange={this.changeValue}/>,
                        )}
                        </Form.Item>
                        <Form.Item className={LoginCss.item2}>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: false,
                        })(<Checkbox>记住密码</Checkbox>)}
                        <Link to="/adminhomepage/adminforgot" className={LoginCss.forgot}>
                            忘记密码？
                        </Link>
                        <br/>
                        {/* <Link to="/"> */}
                            <Button onClick={this.login} value="" type="primary" htmlType="submit" className={LoginCss.button}>
                                登录
                            </Button>
                        {/* </Link> */}
                        <br/>
                            <Link to="/homepage/register">没有账号？马上注册一个吧</Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Form.create()(LoginPage);