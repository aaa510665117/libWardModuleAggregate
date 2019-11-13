//
//  HttpRequestManager.h
//  WinningFoundation
//
//  Created by winning on 2019/5/9.
//  Copyright © 2019年 winning. All rights reserved.
//

#import "BaseHttpRequestManager.h"
#import <YYModel/YYModel.h>

NS_ASSUME_NONNULL_BEGIN

@interface HttpRequestManager : BaseHttpRequestManager

/**
 post请求

 @param URLString 请求地址
 @param parameters 请求参数
 @param successBlock 请求成功返回
 @param failure 请求失败返回
 */
+(void)POST:(NSString *)URLString parameters:( id)parameters success:( void (^)(BOOL success ,id data,NSString * action,NSString * message))successBlock failure:(void (^)(NSError * error))failure;

/**
 get请求

 @param URLString 请求地址
 @param parameters 请求参数
 @param successBlock 请求成功的返回
 @param failure 请求失败的返回
 */
+(void)GET:(NSString *)URLString parameters:( id)parameters success:( void (^)(BOOL success ,id data,NSString * action,NSString * message))successBlock failure:(void (^)(NSError * error))failure;

/**
 上传文件

 @param URLString 请求地址
 @param parameters 请求参数
 @param datas 文件的data数组
 @param successBlock 请求成功的返回
 @param failure 请求失败的返回
 */
+(void)POST:(NSString *)URLString parameters:(id)parameters formatDatas:(NSMutableArray<FormateData *>*)datas success:( void (^)(BOOL success ,id data,NSString * action,NSString * message))successBlock failure:(void (^)(NSError * error))failure;

/**
 JAVA post请求

 @param URLString 请求地址
 @param parameters 请求参数
 @param successBlock 请求成功返回
 @param failure 请求失败返回
 */
+(void)POST_JAVA:(NSString *)URLString parameters:( id)parameters success:( void (^)(BOOL success ,id data,NSString * action,NSString * message))successBlock failure:(void (^)(NSError * error))failure;

/**
 判断网络连接的 GET 请求 - 显示空白页
 
 @param url 请求接口
 @param vc 发起网络请求的控制器,作为弹出空白页的承载容器
 @param successBlock 请求成功 block
 @param failure 请求 失败 block
 */
+(void)GET_JudgeNetworkConnectWithURL:(NSString *)url parameters:(id)parameters ofView:(UIViewController *)vc success:( void (^)(BOOL success ,id data,NSString * action,NSString * message))successBlock failure:(void(^)(NSError * error))failure;

+(AFHTTPSessionManager *)getAFManager;

@end

NS_ASSUME_NONNULL_END
