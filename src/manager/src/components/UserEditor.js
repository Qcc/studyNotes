import React from 'react';
import FormItem from './FormItem';
import formProvider from '../utils/formProvider';

class UserEditor extends React.Component{
    
    componentWillMount(){
        const{editTarget,setFormValues} = this.props;
        if(editTarget){
            setFormValues(editTarget);
        }
    }

    handleSubmit(e){
        e.preventDefault();
        // alert(JSON.stringify(this.state));
        const{form:{name,age,gender},formValid,editTarget}=this.props;
        if(!formValid){
            alert('请正确填写信息后重试！');
            return;
        }
        let editType = '添加';
        let apiUrl = 'http://localhost:3000/user';
        let method = 'post';
        if(editTarget){
            editType='编辑';
            apiUrl +='/'+editTarget.id;
            method = 'put';
        }

        fetch(apiUrl,{
            method,
            body:JSON.stringify({
                name:name.value,
                age:age.value,
                gender:gender.value
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            if(res.id){
                alert('添加成功！');
                this.context.router.push('/user/list');
                return;
            }else{
                alert('添加失败！');
            }
        })
        .catch((err)=>console.error(err));
    }
     render(){
        const{form:{name,age,gender},onFormChange} = this.props;
        return(
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <FormItem label="用户名：" valid={name.valid} error={name.error}>
                        <input type="text" value={name.value} onChange={(e)=>onFormChange('name',e.target.value)}/>
                        </FormItem>

                        <br/>
                        <FormItem label="年龄：" valid={age.valid} error={age.error}>
                        <input type="number" value={age.value ||''} onChange={(e)=>onFormChange('age',e.target.value,'number')}/>
                        </FormItem>
                        
                        <br/>
                        <FormItem label="性别：" valid={gender.valid} error={gender.error}>
                        <select value={gender.value} onChange={(e)=>onFormChange('gender',e.target.value)}>
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                        </FormItem>
                        <br/>
                        <br/>
                        <input type="submit" value="提交"/>
                    </form>
        );
    }
}

UserEditor.contextTypes = {
    router:React.PropTypes.object.isRequired
};

UserEditor = formProvider({
    name:{
        defaultValue:'',
        rules:[{
            pattern:function(value){
                return value.length>0;
            },
            error:'请输入用户名'
        },{
            pattern:/^.{1,4}$/,
            error:'名字最多4个字符'
        }
        ]
    },
    age:{
        defaultValue:0,
        rules:[{
            pattern:function(value){
                return value >= 1 && value <= 100;
            },
            error:'请输入1～100的年龄'
        }]
    },
    gender:{
        defaultValue:'',
        rules:[{
            pattern:function (value) {
                return !!value;
            },
            error:'请选择性别！'
        }]
    }
})(UserEditor);

export default UserEditor;