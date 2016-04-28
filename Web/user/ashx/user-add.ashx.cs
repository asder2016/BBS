using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace Web.user.ashx
{
    /// <summary>
    /// user_add 的摘要说明
    /// </summary>
    public class user_add : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string json = "{'info':'增加数据失败'}";
            //获取动作的类型
            string action = context.Request.Form["Action"];
            if (action == "add")
            {
                
                //获取GET方法传递参数：Request.QueryString["参数名称"];
                //获取POST方法传递参数：Request.Form["参数名称"];
                string sname = context.Request.Form["Tname"]; //保存文本框对象，提高效率
                string spwd = context.Request.Form["Tpwd"];
                string semail = context.Request.Form["Temail"];
                string sbirthday = context.Request.Form["Tbirthday"];
                string sex= context.Request.Form["Tsex"];
                string sclass = context.Request.Form["Tclass"]; //保存文本框对象，提高效率
                string sstatement = context.Request.Form["Tstatement"];
                string sregdate = context.Request.Form["Tregdate"];
                string sstate = context.Request.Form["Tstate"];
                string spoint = context.Request.Form["Tpoint"];
                
                mode
              
                

                model.CreatDate = DateTime.Now;//

                if (adminSex == "true") { model.sex = true; }

                BLL.Admin bll = new BLL.Admin();
                int n = bll.add(model);
                //返回单个文字信息
                if (n > 0) { json = "{'info':'增加数据成功,编号是：" + n + "'}"; }
            }
            else if (action == "Load")
            {
                if (context.Session["ID"] == null)
                {
                    json = "{'info':'no'}";
                }

            }
            context.Response.Write(json);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}