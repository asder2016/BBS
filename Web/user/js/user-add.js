$(document).ready(
    function () {

        //进入ashx判断是否已经登录

        $.ajax({
            type: "post",
            url: "ashx/user-add.ashx",
            data: { "Action": "Load" },
            dataType: "text",
            success: function (data) {
                //返回类型为text时 要处理一下 
                var json = eval('(' + data + ')');
                if (json.info == 'no') {
                    alert('请先登录');
                    window.location.href = "user-login.html";
                }
            },

        });


        //在这里写代码
        //找到取消按钮，添加功能：单击是、、1. 弹出一个框
        //2.点击取消。给登录名、密码清空。真实姓名设置为匿名
        $("#btnCancel").click(
            function () {
                //  alert("hello world 哈哈");
                $("#name").val("");
                $("#pwd").val("");
                $("#email").val("");
                $("#birthday").val("");
                $("#class").val("");
                $("#statement").val("");
                $("#regdate").val("");
                $("#state").val("");
                $("#point").val("");
             
            });
        //点击注册按钮。获取登录名、密码、真实姓名。用弹出框显示出来。
        $("#btnSub").click(
            function () {
               var Name= $("#name").val();
               var Pwd= $("#pwd").val();
               var Email=$("#email").val();
               var Birthday=$("#birthday").val();
               var Class=$("#class").val();
               var Statement=$("#statement").val();
               var Regdate=$("#regdate").val();
               var State=$("#state").val();
               var Point=$("#point").val();
                //性别用布尔类型表示
                var Sex= true;
                var sexCheck = $('input:radio[name="Usex"]:checked').val();//得到单选按钮选中项的值
                if (sexCheck == '女') { Sex = false; }

                //把数据传递到ashx文件里。然后把ashx回传的数据显示出来。
                $.ajax({
                    type: "post",
                    url: "ashx/Add.ashx",
                    data: { "Action": "add", "Tname": Name, "Tpwd": Pwd, "Temail": Email, "Tbirthday": Birthday,"Tsex":Sex, "Tclass": Class, "Tstatement": Statement, "Tregdate": Regdate, "Tstate": State, "Tpoint": Point },
                    dataType: "text",
                    success: function (data) {

                        var json = eval('(' + data + ')');
                        alert(json.info);
                    },
                });

                // alert(name + "\n" + pwd + "\n" + realname+"\n"+sex);
            });
    });