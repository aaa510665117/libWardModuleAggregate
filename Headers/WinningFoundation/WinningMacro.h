//
//  WinningMacro.h
//  WinningFoundation
//
//  Created by winning on 2019/4/29.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "GVUserDefaults+Properties.h"
#import "UIColor+MainColor.h"
#import "NSString+WinningBase.h"

#pragma mark - Macros

#define WINNING_SCREEN_WIDTH ([[UIScreen mainScreen] bounds].size.width)
#define WINNING_SCREEN_HEIGHT ([[UIScreen mainScreen] bounds].size.height)
#define WINNING_SCREEN_MAX_LENGTH (MAX(WINNING_SCREEN_WIDTH, WINNING_SCREEN_HEIGHT))
#define WINNING_SCREEN_MIN_LENGTH (MIN(WINNING_SCREEN_WIDTH, WINNING_SCREEN_HEIGHT))
#define WINNING_SCREEN_SCALE [UIScreen mainScreen].scale
#define WINNING_SCREEN_WIDTH ([[UIScreen mainScreen] bounds].size.width)
#define WINNING_SCREEN_HEIGHT ([[UIScreen mainScreen] bounds].size.height)
#define WINNING_SCREEN_MAX_LENGTH (MAX(WINNING_SCREEN_WIDTH, WINNING_SCREEN_HEIGHT))
#define WINNING_SCREEN_MIN_LENGTH (MIN(WINNING_SCREEN_WIDTH, WINNING_SCREEN_HEIGHT))
#define WINNING_SCREEN_SCALE [UIScreen mainScreen].scale
#define WINNING_SEPARATOR_DIMENSION (WINNING_SCREEN_SCALE < 3.0 ? 0.5 : 0.5)
#define WINNING_IS_IPHONE_4_OR_LESS (WINNING_SCREEN_MAX_LENGTH < 568.0)
#define WINNING_IS_IPHONE_5 (WINNING_SCREEN_MAX_LENGTH == 568.0)
#define WINNING_IS_IPHONE_6 (WINNING_SCREEN_MAX_LENGTH == 667.0)
#define WINNING_IS_IPHONE_6P (WINNING_SCREEN_MAX_LENGTH > 667.0)
#define WINNING_IS_IPHONE_5_OR_LESS (WINNING_SCREEN_MAX_LENGTH <= 568.0)
#define WINNING_IS_IOS_10 ([[[UIDevice currentDevice] systemVersion] floatValue] >= 10.0)
#define WINNING_IS_IOS_9_OR_LATER ([[[UIDevice currentDevice] systemVersion] floatValue] >= 9.0)
#define WINNING_IS_IOS_11_OR_LATER ([[[UIDevice currentDevice] systemVersion] floatValue] >= 11.0)
//#define is_iPhoneX (WINNINGHasNeatBang())
//是否是iphone
#define IS_IPHONE (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone)
//是否是IOS11
#define IS_IOS_11  ([[[UIDevice currentDevice] systemVersion] floatValue] >= 11.f)
#define is_iPhoneX (IS_IOS_11 && IS_IPHONE && (MIN([UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height) >= 375 && MAX([UIScreen mainScreen].bounds.size.width, [UIScreen mainScreen].bounds.size.height) >= 812))

#pragma mark - Old MobileClinical Define

//状态栏高度
#define StatusBarHeight     (is_iPhoneX ? 44.f : 20.f)
// 导航高度
#define NavigationBarHeight 44.f
// Tabbar高度.   49 + 34 = 83
#define TabbarHeight        (is_iPhoneX ? 83.f : 49.f)
// Tabbar安全区域底部间隙
#define TabbarSafeBottomMargin  (is_iPhoneX ? 34.f : 0.f)
// 状态栏和导航高度
#define StatusBarAndNavigationBarHeight  (is_iPhoneX ? 88.f : 64.f)

//Document本地缓存路径
#define DOCUMENT_PATH NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES).lastObject
//日志路径
#define EXCEPTION_PATH [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES).firstObject stringByAppendingPathComponent:@"EXCEPTION.txt"]
//水印路径
#define WATERMARK_PATH [DOCUMENT_PATH stringByAppendingPathComponent:@"watermark.png"]

//Font
#define FONT_NAME @"PingFang SC"
#define HeiTI_SIZE(s) [UIFont fontWithName:@"AmericanTypewriter-Bold" size:FIT_Font(s)]
#define FONT_YAHEI(s) [UIFont fontWithName:@"MicrosoftYaHei" size:s]
#define FONT_SIZE(s) [UIFont fontWithName:FONT_NAME size:FIT_Font(s)]
#define FONT_SYSTEM(s) [UIFont systemFontOfSize:FIT_Font(s)]
#define BOLDFont_SIZE(s) [UIFont boldSystemFontOfSize:FIT_Font(s)]
#define FIT_Font(s) Screen_Width==375? s : Screen_Width==414 ? s+1 : s-1

//适配
#define  FIT_Size(s) Screen_Width * s/375.0
#define AdaptW(W) Screen_Width * W/375.0


//宏
//全局 单例
#define GVUSER   [GVUserDefaults standardUserDefaults]
#define NotificationCenter   [NSNotificationCenter defaultCenter]
#define KEYWindow   [[UIApplication sharedApplication].delegate window]

//=========接口=========
#define MAINHOST [NSString stringWithFormat:@"http://%@:%@",GVUSER.ip,GVUSER.port]
//#define MAINHOST [NSString stringWithFormat:@"http://360b7143.nat123.cc:35959"]
#define URLWithComponent(path) [MAINHOST stringByAppendingString:path]

//窗口
#define Screen_Width   [UIScreen mainScreen].bounds.size.width
#define Screen_Height  [UIScreen mainScreen].bounds.size.height

//下载备忘录媒体文件
#define DOWNLOADMedia(xh) [NSString stringWithFormat:URLWithComponent(@"/attatchment/download?$name=dailyrecord&file=%@"),xh]
//全局语音命令
#define SPEECH_CMD_URL URLWithComponent(@"/api/data/speech/instruction-list")

#define iOS11 @available(iOS 11.0, *)

//全局通知
#define UpdateDiagnoseCellsNotificationKey  @"UpdateDiagnoseCellsNotificationKey"
#define SelectedDiagnoseCellsNotificationKey @"SelectedDiagnoseCellsNotificationKey"

//循环引用相关
#define eh_weakSelf(var)   __weak typeof(var) ws = var
#define eh_strongSelf(var) __strong typeof(var) ss = var

#pragma mark - Functions
extern BOOL WinningIsEmptyString(NSString* string);
extern UIColor* WinningColorHex(NSString* colorHex);
extern CGRect WinningRectSetOriginX(CGRect rect, CGFloat originX);
extern void WinningDispatchSyncOnMainQueue(void (^block)(void));
extern UIEdgeInsets WinningSafeAreaInsets(void);
extern BOOL WinningHasNeatBang(void);

#pragma mark - Constants
extern NSString* const WinningSchemeHttp;
extern NSString* const WinningSchemeHttps;

extern NSString* const WinningEmptyString;
extern NSString* const WinningEmptyUUIDString;
extern NSString* const WinningLineBreakString;

extern NSString* const WinningPathSeparator;

#pragma mark - Blocks
typedef void(^WinningAction)(void);
typedef BOOL(^WinningPredicate)(void);

typedef enum : NSUInteger {
    UploadTypePicture,
    UploadTypeVoice,
    UploadTypeText,
    UploadTypeVideo,
} UploadType;

typedef NS_ENUM(NSInteger,CheckType) {
    CheckTypeInspection,     //检查
    CheckTypeTest,           //检验
};
