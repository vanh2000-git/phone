class phone {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.draft = "";
        this.inbox = [];
        this.sent = [];
        this.power = true;
        this.charge = false;
    }

    //kiểm tra trạng thái
    powerSwitch() {
        if (this.battery>0){
            this.power = true;
        } else{
            this.power = false;
        }
        if (this.power) {
            console.log(`${this.name} is on`);
        } else if (confirm(`${this.name} is off, do you want to turn on`)) {
            this.power = true;
            console.log(`${this.name} is on`);
        } else {
            console.log(`${this.name} is off`);
        }
    }

    //bat tat dien thoai
    //sạc pin dien thoai
    batteryCharge(){
        if (this.battery===0 && this.power===false){
            let charge = confirm(`Điện thoại hết pin, cắm sạc và bật lại`);
            if (charge){
                this.battery = 100;
                this.power = true;
                alert(`${this.name} is on, pin được sạc đầy`);
            }
        } else {
            console.log(`${this.name} còn ${this.battery}%`);
            this.battery--;
        }
}
    //Soạn tin nhắn
    writeDraft(newMessage) {
        if (this.power){
            this.draft = newMessage;
            this.battery--;
        }
    }

    //Nhận gửi tin nhắn
    sendMessage(otherPhone) {
        if (this.power) {
            otherPhone.inbox.push(this.draft);
            this.sent.push(this.draft);
            this.draft = "";
            this.battery--;
        }
    }

    // Xem tin nhắn trong hộp thư đến
    readInbox() {
        if (this.power) {
            let readInBoxValue = +prompt(`Bạn có ${this.inbox.length} tin nhắn gửi đến. Bạn muốn đọc tin nhắn nào?`);
            console.log(`${this.inbox[readInBoxValue - 1]}`);
            this.battery--;
        }
    }

    // Xem tin nhắn đã gửi
    readSent() {
        if (this.power) {
            let readSentValue = +prompt(`Bạn có ${this.sent.length} tin nhắn đã gửi. Bạn muốn đọc tin nhắn nào?`);
            console.log(`${this.inbox[readSentValue - 1]}`);
            this.battery--;
        }
    }
}