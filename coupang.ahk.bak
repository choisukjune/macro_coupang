findCaryophy()
{
	try
	{
		Sleep, 1000
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,caryophy.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
		}
		if ErrorLevel=1
		{
			ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,coupang_footer_logo.png
			if ErrorLevel=0
			{
				WinClose,ahk_class Chrome_WidgetWin_1
				Run,%A_ScriptDir%\reStart.bat
			}
			if ErrorLevel=1
			{
				Sleep, 500
				MouseClick, WheelDown, , , 3
				findCaryophy()
			}
		}
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat
	}
	
}

findCoupang()
{
	try
	{
		Sleep, 2000
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,coupang_search.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%-1,%vy%+1
			MouseClick,Left,%vx%+1,%vy%+2
		}
		if ErrorLevel=1
		{
			
			Sleep, 2000
			findCoupang()
		}
	
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat	
	}
	
}


clickPage()
{
	try
	{
		Sleep, 1000
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,click_page.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
		}
		if ErrorLevel=1
		{
			Loop, 10
			{
				Send, {WheelDown}
				Sleep, 75
			}
			clickPage()
		}
	
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat	
	}
	
}


optionClick()
{
	try
	{
	
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,option_click.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
		}
		if ErrorLevel=1
		{
			Sleep, 1000
			
			MouseClick, WheelDown, , , 15
			
			Sleep, 1000
			optionClick()
		}
	
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat	
	}
	
}

cartClick()
{
	try
	{
	
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,cart_click.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
		}
		if ErrorLevel=1
		{
			Sleep, 1000
			
			MouseClick, WheelDown, , , 1

			cartClick()
		}
	
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat	
	}
	
}

prd_more_click()
{
	try
	{
		Sleep, 1000
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,prd_more_click.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
		}
		if ErrorLevel=1
		{
			Sleep, 1000
			MouseClick, WheelDown, , , 10
			prd_more_click()
		}
	
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat	
	}
	
}

findGoogle()
{
	try
	{
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,google_search.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%+5,%vy%-5
		}
		if ErrorLevel=1
		{
			
			Sleep, 2000
			findGoogle()
		}
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat		
	}
	
}

findGoogleResult()
{
	try
	{
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,coupang_site.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
		}
		if ErrorLevel=1
		{
			
			Sleep, 2000
			findGoogleResult()
		}
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat		
	}
	
}

findBreadScrumb()
{
	try
	{
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,bread_scrumb.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%,%vy%
			MouseClick,Left,%vx%,%vy%
		}
		if ErrorLevel=1
		{
			
			Sleep, 2000
			findBreadScrumb()
		}
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat
	}
}

findCoupangMovePage()
{
	try
	{
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,coupang_move_page.png
		if ErrorLevel=0
		{
			Sleep, 1000
		}
		if ErrorLevel=1
		{
			
			Sleep, 2000
			findCoupangMovePage()
		}
	}
	catch e
	{
		WinClose,ahk_class Chrome_WidgetWin_1
		Run,%A_ScriptDir%\reStart.bat
	}
	
}

F6::
Run, chrome.exe -incognito www.google.com

try
{
ControlClick, x1284 y423, ahk_class Chrome_WidgetWin_1
Sleep, 2000

Clipboard = coupang

findGoogle()
send, ^v
Sleep, 1000
send, {Enter}
Sleep, 2000

findGoogleResult()

Sleep, 2000

findCoupang()

;send, 캐
;Sleep, 500
;send, 리
;Sleep, 500
;Send, 오
;Sleep, 500
;Send, 피
;Sleep, 500
;send, {Space}
;Sleep, 500
;Send, 약
;Sleep, 500
;Send, 산
;Sleep, 500
;Send, 성
;Sleep, 500
;send, {Space}
;Sleep, 500
;Send, 토
;Sleep, 500
;Send, 너

Clipboard = 약산성 토너
send, ^v

Sleep, 1000
send, {Enter}

Sleep, 1000

clickPage()

Sleep, 1000


findCoupangMovePage()

findCaryophy()

Sleep, 2000

optionClick()

Sleep, 1000

cartClick()

Sleep, 1000

prd_more_click()

Sleep, 1000

;Loop, 50
;{
;	Send, {WheelDown}
;	Sleep, 75
;}	
;Loop, 100
;{
;	Send, {WheelUp}
;	Sleep, 75
;}

Sleep, 2000
WinClose,ahk_class Chrome_WidgetWin_1
Run,%A_ScriptDir%\reStart.bat
}
catch e
{
	WinClose,ahk_class Chrome_WidgetWin_1
	Run,%A_ScriptDir%\reStart.bat
}


F4::Reload
F2::Pause

F3::ExitApp