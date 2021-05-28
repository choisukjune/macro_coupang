findCaryophy()
{
	ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,캐리오피.png
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
			;MsgBox,인식을못한다 바꿔라
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

Clipboard = 쿠팡

findGoogle()
send, ^v
Sleep, 1000
send, {Enter}
Sleep, 2000

findGoogleResult()

Sleep, 2000

findCoupang()

Clipboard = 캐리오피
send, ^v

Sleep, 1500
send, {Enter}

Sleep, 2000

findCaryophy()

Sleep, 2000

Loop, 100
	MouseClick, WheelDown,,,1

Loop, 50
	MouseClick, WheelUp,,,1


Sleep, 2000
WinClose,ahk_class Chrome_WidgetWin_1
Run,%A_ScriptDir%\test.bat

F4::Reload
F2::Pause

F3::ExitApp


	

