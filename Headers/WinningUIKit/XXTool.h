//
//  XXTool.h
//
//  Created by zhimai on 14/10/9.
//  Copyright (c) 2014年 xuran. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef void(^SuccessBlock)(id data);
typedef void(^FailBlock)(NSError *error);

@interface XXTool : NSObject

@property (nonatomic,assign) BOOL  isLandScape;//是否横屏

//单例
+(instancetype)shareXXRool;

//改变 label 带冒号(:)前后 text 的颜色  前#999999 后#333333
+(void)changeLabelTextColorWithTitle9_3:(NSString *)title andLabel:(UILabel *)label;
//改变 label 带冒号(:)前后 text 的颜色  前#999999 后#666666
+(void)changeLabelTextColorWithTitle9_6:(NSString *)title andLabel:(UILabel *)label;

//将时间字符串2017081006:30:00  转化 08-10 06:30
+(NSString *)handleTimeString:(NSString *)timeStr;

// 存值
+ (void)setObject:(id)obj forKey:(NSString *)key;
+ (void)setBool:(BOOL)b forKey:(NSString *)key;

// 取值
+ (id)objectForkey:(NSString * )key;
+ (BOOL)boolForKey:(NSString *)key;

//自适应长度
+(CGFloat)widthOfString:(NSString *)string font:(UIFont*)font height:(CGFloat)height;

//自适应高度
+(CGFloat)heightOfString:(NSString *)string font:(UIFont*)font width:(CGFloat)width;

// 设置图片拉伸点
+ (UIImage *)resizeImage:(UIImage *)image;

//矫正图片方向
+(UIImage *)fixOrientation:(UIImage *)aImage ;

//根据数据源判断 是否 展示无数据空白页
+(void)showNODataPageWithView:(UIView *)view andDataSource:(NSArray *)dataSource;
//隐藏无数据空白页
+(void)hiddenNoDataPageWithView:(UIView *)view;

//根据性别返回全局床位颜色
+(UIColor *)BedColorWithSex:(NSString *)sex;

//比较当前时间,返回字符串
+(NSString *)compareCurrentTime:(NSString *)passTime;

//当前时间和将来时间比
+(NSString *)compareCurretTimeWithFuture:(NSString *)futureTime;


/**
 *  创建 alertView
 */
+(void)createAlertOfView:(UIViewController *)popVC WithTitle:(NSString * )title andMessage:(NSString *)message andActionTitle:(NSString *)actionTitle andAction:(void(^)(UIAlertAction * action))actionBlock andCancleTitle:(NSString *)cancleTitle andCancleAction:(void(^)(UIAlertAction * action))cancleActionBlock;

//保存收集的崩溃文件
+(void)saveExceptionInformationTrack:(NSString *)name withErrorReason:(NSString *)reason withErrorCallstack:(NSArray *)Callstacks;
//删除崩溃文件
+(void)removeExceptionInformation;

/**
 扫描二维码
 */
+(void)scanQRCodeOfView:(UIViewController *)vc WithCompleteScan:(void (^)(NSString * resultString))authorizedBlock;

/**
 添加水印
 */
+(void)addWaterMarkImageForView:(UIView *)superView;

/**
 是否开放新功能

 @return 根据科室和病区限制
 */
+(BOOL)IsOpenNewFunction;


/**
 检查麦克风
 */
+ (BOOL)checkMicrophoneAvailability;

/*
  将int型秒数转换为00：00格式
 */
+(NSString *)secondToOOOO:(NSInteger)second;

/**
 倒计时功能
 
 @param btn 获取验证码按钮
 */
+ (dispatch_source_t)startTimeWithBtn:(UIButton *)btn;

/*
 获取顶层VC
 */
+ (UIViewController *)getCurrentRootViewController;

/*
 获取searchBar输入框
 */
+ (UITextField *)sa_GetSearchTextFiled:(UISearchBar *)searchBar;

/*
 旋转屏幕
 */
+ (void)changeInterfaceOrientation:(UIInterfaceOrientation)orientation;

/*
 字符串时间格式转换
 */
+ (NSString *)getFormatTime:(NSString *)dateStr withFormat:(NSString *)fromFormat toFormat:(NSString *)toFormat;

@end
