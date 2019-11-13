//
//  EHWKWebView.h
//  MobileDoctor
//
//  Created by ZY on 2019/9/26.
//  Copyright © 2019 Ran. All rights reserved.
//  e-hospial-wkwebview

#import <UIKit/UIKit.h>
#import <WebKit/WebKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol EHWKWebViewNavDelegate <NSObject>

//页面开始加载时调用
- (void)ehWebView:(WKWebView*)webView didStartProvisionalNavigation:(null_unspecified WKNavigation*)navigation;
//页面加载完成之后调用
- (void)ehWebView:(WKWebView *)webView didFinishNavigation:(null_unspecified WKNavigation *)navigation;
// 页面加载失败时调用
- (void)ehWebView:(WKWebView *)webView didFailProvisionalNavigation:(null_unspecified WKNavigation *)navigation withError:(NSError *)error;
//提交发生错误时调用
- (void)ehWebView:(WKWebView *)webView didFailNavigation:(WKNavigation *)navigation withError:(NSError *)error;
//进程被终止时调用
- (void)ehWebViewWebContentProcessDidTerminate:(WKWebView *)webView;

@end

@interface EHWKWebView : UIView<WKScriptMessageHandler>

@property (nonatomic,assign) id<EHWKWebViewNavDelegate> ehNavigationDelegate;

/*
 initFunc
 frame-frmae
 configuration: addScriptMessageHandler:
 */
- (instancetype)initWithFrame:(CGRect)frame configuration:(nonnull WKWebViewConfiguration *)configuration;

/*
 loadRequest
 */
-(void)loadRequest:(NSURLRequest *)request;

/*
 loadRequest
 */
-(void)loadUrl:(NSString *)url;

/*
 ocTOjs
 */
-(void)CALLJS:(NSString *)JS;

/*
 request == nil    刷新当前页
 rerequest != nil  传入页替换当前页
 */
-(void)reload:(NSURLRequest *)request;

@end

NS_ASSUME_NONNULL_END
