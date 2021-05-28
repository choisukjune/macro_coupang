findCaryophy()
{
	ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,caryophy.png
	if ErrorLevel=0
	{
		MouseClick,Left,%vx%,%vy%
	}
	if ErrorLevel=1
	{
		ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,nextPageBtn.png
		if ErrorLevel=0
		{
			MouseClick,Left,%vx%,%vy%
			Sleep, 1000
			findCaryophy()
		}
		if ErrorLevel=1
		{
			MouseClick, WheelDown, , , 6
			findCaryophy()
		}
	}
}

findCoupang()
{
	ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,coupang_search.png
	if ErrorLevel=0
	{
		MouseClick,Left,%vx%,%vy%
	}
	if ErrorLevel=1
	{
		
		Sleep, 2000
		findCoupang()
	}
}

findGoogle()
{
	ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,google_search.png
	if ErrorLevel=0
	{
		MouseClick,Left,%vx%,%vy%
	}
	if ErrorLevel=1
	{
		
		Sleep, 2000
		findGoogle()
	}
}

findGoogleResult()
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

F6::
Run, chrome.exe

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

;Clipboard = 캐리오피
Clipboard = 캐리오피 토너
send, ^v

Sleep, 1500
send, {Enter}

Sleep, 2000

findCaryophy()

Sleep, 2000

Loop, 50
{
	Send, {WheelDown}
	Sleep, 75
}	
Loop, 50
{
	Send, {WheelUp}
	Sleep, 75
}


Sleep, 2000
WinClose,ahk_class Chrome_WidgetWin_1
Run,%A_ScriptDir%\reStart.bat

F4::Reload
F2::Pause

F3::ExitApp