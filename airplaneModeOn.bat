@echo off

::현재 비행기모드상태 0 = 비활성화,1 = 활성화
::..\Binary\platform-tools\adb shell settings get global airplane_mode_on

::홈 버튼을 눌러 화면을 켜주기

..\Binary\platform-tools\adb shell input keyevent 3



..\Binary\platform-tools\adb shell am start -a android.settings.AIRPLANE_MODE_SETTINGS


..\Binary\platform-tools\adb shell input keyevent 22


..\Binary\platform-tools\adb shell input keyevent 22


..\Binary\platform-tools\adb shell input keyevent 23

