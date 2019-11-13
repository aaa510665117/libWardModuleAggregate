//
//  UIImage+Bundle.h
//  WinningFoundation
//
//  Created by WinningMac on 2019/6/25.
//  Copyright © 2019 winning. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN


//Bundle Name
extern NSString * _Nonnull WardModuleBundle;
extern NSString * _Nonnull QueryModuleBundle;
extern NSString * _Nonnull ConsultationModuleBundle;
extern NSString * _Nonnull TeachingModuleBundle;
extern NSString * _Nonnull ApprovalModuleBundle;
extern NSString * _Nonnull TodayItemsModuleBundle;
extern NSString * _Nonnull WinningLoginBundle;
extern NSString * _Nonnull WinningWorkBenchBundle;
extern NSString * _Nonnull MedicalBehaviorModuleBundle;

@interface UIImage (Bundle)

/**
 根据BundleName取图片资源

 @param name 图片名
 @param bundleName Bundle名
 @return image
 */
+(UIImage *)wn_imageNamed:(NSString *)name withBundleName:(NSString *)bundleName;
+ (UIImage*)wn_gifImageNamed: (NSString*)imageName withBundleName: (NSBundle*)bundleName;

//各模块调用Bundle图片
+(UIImage *)ward_imageNamed:(NSString *)name;

/// 查询模块
/// @param name 图片名字
+(UIImage *)query_imageNamed:(NSString *)name;

+(UIImage *)cst_imageNamed:(NSString *)name;

+(UIImage *)teach_imageNamed:(NSString *)name;

+(UIImage *)approval_imageNamed:(NSString *)name;

+(UIImage *)today_imageNamed:(NSString *)name;

+ (UIImage *)login_imageName:(NSString *)imageName;

+ (UIImage *)workBenck_imageName:(NSString *)imageName;

+ (UIImage *)mediaBehavior_imageName:(NSString *)imageName;

@end

NS_ASSUME_NONNULL_END
