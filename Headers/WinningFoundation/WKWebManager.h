//
//  WKWebManager.h
//  JSTextPro
//
//  Created by 徐然 on 2017/11/27.
//  Copyright © 2017年 Ran. All rights reserved.

//  JS端发送消息 window.webkit.messageHandlers.MethodName.postMessage(Parameters)
/*
 example:
 WKWebManager * webManager = [[WKWebManager alloc] initWithWebView:self.wkWebView];
 [webManager addScriptMessageWithName:@"xuran"];
 [webManager addScriptMessageWithName:@"showPhone"];
 webManager.receiveMessageBlock = ^(NSString * name,id parameters){
     if ([name isEqualToString:@"xuran"]) {
     NSArray * arr = (NSArray *)parameters;
     [self xuran:arr[0] and:arr[1]];
     }else if([name isEqualToString:@"showPhone"]) {
     [self showPhone:parameters];
     }
 };
 */

#import <Foundation/Foundation.h>
#import <WebKit/WebKit.h>

@interface WKWebManager : NSObject


/**
 注册 script 脚本必须传入所属的WKWebView,也可以用初始化方法传入
 */
@property (nonatomic,strong) WKWebView * webView;


/**
 JS调用OC的回调
 
 JS 监听方法名的执行,parameters是 JS 传过来的参数
 
 根据规定的标识name判断,执行相应操作
 */
@property (nonatomic,copy) void(^receiveMessageBlock)(NSString * name,id parameters);


/**
 初始化-带入所属WKWebView
 */
-(instancetype)initWithWebView:(WKWebView *)webView;


/**
 注册脚本事务

 @param name  JS 的注册标识名
 */
-(void)addScriptMessageWithName:(NSString *)name;


/**
 OC调用JS
 给js端发送消息

 @param JS 所需执行的js字符串
 */
-(void)postMessageToJavaScriptWithString:(NSString *)JS;


@end
