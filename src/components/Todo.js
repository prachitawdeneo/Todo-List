import { Component } from "react";



class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arr: [{id:1,title:"A",body:"Hello A"},
            {id:2,title:"B",body:"Hello B"}],
            // index:,\
            edit:0,
            title: ' ',
            body: ' '

        }
    }

    thandler = (event) => {
        this.setState({
            title: event.target.value,
            /* body:event.target.value */
          
        })
       
    };
    bhandler = (event) => {
        this.setState({
            /* title: event.target.value, */
            body:event.target.value
        })
    };


    addTask = () => {
        let { body,title, arr } = this.state;
        this.setState({arr:[...arr,{
            title:title,
            body:body,
            }]});
            console.log(title)
            console.log(body)
            console.log(this.setState)
            
        arr.push({
            // id: this.state.index,
            title:title,
            body:body,
            
        })
        console.log(arr);
        document.getElementById("title").value=" ";
        document.getElementById("body").value=" ";

        
    }


    deleteTask = (index) => {
        console.log("delete");
        var bool = window.confirm("Do You really want to delele this?")
        if (bool === true) {
            let { arr } = this.state;
            arr.splice(index, 1)
            this.setState({
                arr: arr
            })
            console.log(index);
        }
        else {
            return
        }
    }
    updateTask = (index,) => {
        let arr=this.state.arr
        /* let final=document.getElementById("btn")
        let event=final.onclick */
        // let edit=this.state.edit
        
        //arr  = arr[index];
        console.log(arr[index].title)
        let tinp= document.getElementById('title')
        let binp= document.getElementById('body')
        tinp.value=arr[index].title
        //console.log(tinp.value)
        binp.value=arr[index].body
        this.state.edit=index  
        this.setState({
            arr:arr ,
            
        })
        
        /* final.innerHTML="Update"
        
        final.onclick=() => this.finalUpdate(this.state.edit); */
        
        /* console.log(this.state)
        console.log(this.state.title)
        console.log(this.state.body)
        console.log(this.state.edit)
        console.log(index) */
        
       
        //let btn= document.getElementById('btn')
        //btn.innerHTML="Update"

       /*  if (update != null) {
            this.state.arr[index] = update;
            this.setState({ arr: arr })
        }
        else {
            return
        } */

    }
    finalUpdate=(index)=>{
        let arr=this.state.arr
        let title=this.state.arr.title
        let body=this.state.arr.body
        arr[index].title=document.getElementById('title').value
        console.log(arr[index].title)
        arr[index].body=document.getElementById('body').value
        this.setState({
            title:title,
            body:body
        })
        document.getElementById("title").value=" ";
        document.getElementById("body").value=" ";
    }
    render() {
        return <>
            <div className="Container">
                <h1 className="title">TO DO LIST</h1>
                <h1 className="head">Add List</h1>
               
                    <div class="form-row box    ">
                        <div class="form-group col-md-6 ">
                        <label for="title">Title</label>
                        <input type="text"  onChange={this.thandler} name="title" id="title" className="inp form-control" required/>
                        </div>
                        <div class="form-group col-md-6">
                        <label for="body">Body</label>
                        <textarea onChange={this.bhandler} name="body" id="body"   className="inp body form-control" required></                 textarea>
                        </div>
                        <div className="btn-box">
                        <button  className="btn bg-success text-light" id="btn" onClick={this.addTask}>Add task</button>
                        <button className="btn bg-success text-light" id="btn2" onClick={() => this.finalUpdate(this.state.edit)}>Update</button>
                        </div>
                    </div>
                   
                <table className="table" border="3">
                    <thead>
                        <th>Sr No</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {this.state.arr.map((task, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{task.title}</td>
                                <td>{task.body}</td>
                                {/* <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.body}</td> */}
                                <td><button className="btn1 btn bg-warning text-light" onClick={() => this.updateTask(index,)}>Edit</button><button
                                    onClick={() => this.deleteTask(index)} className="btn1 btn bg-danger text-light">Delete</button></td>
                            </tr>

                        })}
                    </tbody>

                </table>
            </div>
        </>
    }

}
export default ToDo;


