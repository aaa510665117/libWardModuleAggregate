//
//  BaseHttpRequestManager.h
//  WinningFoundation
//
//  Created by winning on 2019/5/9.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AFNetworking/AFNetworking.h>

NS_ASSUME_NONNULL_BEGIN

typedef enum : NSUInteger {
    FormateDataMimeTypePicture,
    FormateDataMimeTypeAudio,
    FormateDataMimeTypeVideo,
} FormateDataMimeType;

static NSString * GetMimeType(FormateDataMimeType type){
    switch (type) {
            case FormateDataMimeTypePicture:
            return @"image/jpeg";
            
            case FormateDataMimeTypeAudio:
            return @"audio/basic";
            
            case FormateDataMimeTypeVideo:
            return @"video/mp4";
            
        default:
            return @"";
    }
}

@interface FormateData : NSObject
@property (nonatomic,copy)NSData *data;
@property (nonatomic,copy)NSString *name;
@property (nonatomic,copy)NSString *fileName;
@property (nonatomic,copy)NSString *mimeType;
@end

@interface BaseHttpRequestManager : NSObject

/**
 get请求

 @param URLString 服务地址
 @param parameters 参数
 @param successBlock 成功的返回
 @param failure 失败的返回
 */
+(void)GET_base:(NSString *)URLString parameters:( id)parameters success:( void (^)(id dic))successBlock failure:(void (^)(NSError * error))failure;


/**
 post请求

 @param URLString 服务地址
 @param parameters 参数
 @param successBlock 成功的返回
 @param failure 失败的返回
 */
+(void)POST_base:(NSString *)URLString parameters:( id)parameters success:( void (^)(id dic))successBlock failure:(void (^)(NSError * error))failure;



/**
 上传文件

 @param URLString 服务地址
 @param parameters 参数
 @param datas 文件流
 @param successBlock 成功返回
 @param failure 失败返回
 */
+(void)POST_file:(NSString *)URLString parameters:(id)parameters formatDatas:(NSMutableArray<FormateData *>*)datas success:( void (^)(id dic))successBlock failure:(void (^)(NSError * error))failure;


/**
 检查URL非正常编码(包括含中文)
 
 @param urlString 原始URL
 @return 返回可编码URL
 */
+(NSString *)checkURLWithCorrect:(NSString *)urlString;


+(AFHTTPSessionManager *)getAFManager;



@end

NS_ASSUME_NONNULL_END
