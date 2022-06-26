import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: [],
            inputForm: "",
            validValue: "",
            inputChange: "",
            setDisabled: true
        }
    }



    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({ arr: json }))
    }

    deleteHandler(del) {
        const newArr = this.state.arr.map(item => {
            const obj = item;
            if (item.id > del) {
                obj.id--;
            }
            return obj
        });
        newArr.splice(del, 1);
        this.setState({ arr: newArr })
    }

    onChangeValue = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        if (this.testValue(value)) {
            this.setState({
                validValue: value,
                setDisabled: false,
            })
        }
        this.setState({ [input]: value })
    }


    sendItem() {
        const newItem = this.createItem(this.state.validValue);
        const newArr = this.state.arr.map(item => {
            const obj = item;
            obj.id++;
            return obj
        });
        newArr.unshift(newItem);

        this.setState({
            arr: newArr,
            setDisabled: true,
            inputForm: "",
        })
    }

    changeItem(i) {
        const item = this.state.arr[i];
        item.body = this.state.inputChange;


        this.setState({
            inputChange: "",
        })
    }


    createItem(str) {
        return {
            userId: this.state.arr.length,
            id: 1,
            title: 'Новый итем',
            body: str
        }
    }
    testValue(val) {
        return /^([а-я]+[А-Я][а-я]*|[а-я]*[А-Я][а-я]+)/.test(val) && (val.length >= 2 && val.length <= 7);
    }

    render() {
        return (
            <div className="container">
                <form>
                    <input
                        className="form-control"
                        name="inputForm"
                        type="text"
                        value={this.state.inputForm}
                        onChange={this.onChangeValue}
                    ></input>
                    <button type="button" disabled={this.state.setDisabled} onClick={() => this.sendItem()}>Добавить</button>
                </form>

                <ul>
                    {this.state.arr.map((item, i) =>
                        <li key={i} className="list-group-item list-group-item-action">
                            <div className="card-body">
                                <p className="text-muted">{item.id}</p>
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.body}</p>
                                <input
                                    className="form-control"
                                    placeholder="Поменять итем"
                                    name="inputChange"
                                    type="text"
                                    value={this.state.inputChange}
                                    onChange={this.onChangeValue}
                                ></input>
                                <button className="btn-primary" onClick={() => this.deleteHandler(i)}>Удалить</button>
                                <button className="btn-primary" disabled={!this.state.inputChange} onClick={() => this.changeItem(i)}>Изменить</button>
                            </div>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default App;
