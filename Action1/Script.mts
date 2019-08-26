systemutil.Run "http://newtours.demoaut.com/" @@ hightlight id_;_19_;_script infofile_;_ZIP::ssf13.xml_;_
wait 2

Browser("Welcome: Mercury Tours_2").Page("Welcome: Mercury Tours").WebEdit("userName").Set"tutorial"
Browser("Welcome: Mercury Tours_2").Page("Welcome: Mercury Tours").WebEdit("password").Set"tutorial"
Browser("Welcome: Mercury Tours_2").Page("Welcome: Mercury Tours").Image("Sign-In").Click




'iRowCount = DataTable.GetSheet("Global").GetRowCount
'msgbox iRowCount


