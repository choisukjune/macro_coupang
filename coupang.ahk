findCaryophy()
{
	ImageSearch,vx,vy,0,0,A_ScreenWidth,A_ScreenHeight,ĳ������.png
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
			;MsgBox,�ν������Ѵ� �ٲ��
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


F6::
Run, chrome.exe

ControlClick, x1284 y423, ahk_class Chrome_WidgetWin_1
Sleep, 2000

Clipboard = ����

MouseClick, l, 737, 430
send, ^v
send, {Enter}
Sleep, 2000

MouseClick, l, 195, 306
MouseClick, l, 195, 306

Sleep, 2000

findCoupang()

Clipboard = ĳ������
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


	

