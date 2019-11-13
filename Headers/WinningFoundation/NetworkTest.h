//
//  NetworkTest.h
//
//  Description: 网络检测
//
//

#import <Foundation/Foundation.h>

@interface NetworkTest : NSObject 

/**
 真实连接-同步请求
 */
+(BOOL)isConnected;

/**
 真实连接-异步请求
 */
+(void)isConnectedWithAsyncForRealConnection:(void(^)(BOOL isConnected))resultBlock;


/**
 是否网络连接

 @return 返回连接状态 Yes为有网络连接  NO为无网络连接
 */
+ (BOOL)isNetworkConnected;

/**
 当前网络环境是否为wifi

 @return 返回YES、NO
 */
+ (BOOL)isNetworkConnectWifi;

@end
