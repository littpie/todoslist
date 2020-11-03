Page({
	data: {
		//文本框的数据模型
		search: "",
		//任务清单数据模型
		todos: [
			{name:"Learning WEAPP", completed: false},
			{name:"Learning JavaSript", completed: true},
			{name:"Learning HTML", completed: false}
		],
		leftCount:2,
		allCompleted: false,
	},
	inputChangeHandle:function(e) {
		this.setData({search: e.detail.value})
	},
	addTodoHandle: function() {
		//当添加按钮
		if(!this.data.search) return
		var todos = this.data.todos
		todos.push({
			name: this.data.search,
			completed: false,
		})
		this.setData({
			todos: todos, 
			search: "", 
			leftCount: this.data.leftCount + 1,
			})
	},
	toggleTodoHandle(e) {
		var item = this.data.todos[e.currentTarget.dataset.index]
		item.completed = !item.completed
		var leftCount = this.data.leftCount + (item.completed ? -1 : 1)
		this.setData({todos: this.data.todos, leftCount: leftCount})
		},
		removeTodoHandle(e) {
			var todos = this.data.todos
			var item = todos.splice(e.currentTarget.dataset.index, 1)[0]
			var leftCount = this.data.leftCount - (item.completed ? 0 : 1)
			this.setData({todos: todos, leftCount: leftCount})
		},
		toggleAllHandle() {
			this.data.allCompleted = !this.data.allCompleted
			var todos = this.data.todos
			var that = this
			todos.forEach(function(item) {
				item.completed = that.data.allCompleted
			})
			var leftCount = this.data.allCompleted ? 0 : this.data.todos.length
			this.setData({todos: todos, leftCount: leftCount})
		},
		clearHandle(){
		// 	var todos = []
		// 	this.data.todos.forEach(function(item){
		// 		if(!item.completed){
		// 			todos.push(item)
		// 		}
		// 	}
		// )
		var todos = this.data.todos.filter(function(item) {
			return !item.completed
		})
		this.setData({todos: todos})
    }
		
	
	//1.先让按钮点击时执行一段代码
	//2.拿到文本框里面的值
	//2.1由于小程序的数据绑定是单向的，必须要给文本注册改变事件
	//3.将这个值添加到列表中
})