//
//  EHWKWebViewController.h
//  MobileDoctor
//
//  Created by ZY on 2019/9/26.
//  Copyright © 2019 Ran. All rights reserved.
//  网页加载vc

#import <UIKit/UIKit.h>
#import "EHWKWebView.h"
#import "BaseViewController.h"

NS_ASSUME_NONNULL_BEGIN

@interface EHWKWebViewController : BaseViewController

@property (nonatomic, strong) EHWKWebView * ehWebView;

/*
 init-url
 */
-(id)initWithUrl:(NSString*)url;

/*
 init-request
 */
-(id)initWithRequest:(NSURLRequest*)request;

/*
 add-JS
 name-JSName
 */
- (void)addScriptMessageHandler:(id <WKScriptMessageHandler>)scriptMessageHandler name:(NSString *)name;

/*
 ocTOjs
 */
-(void)CALLJS:(NSString *)JS;

@end

NS_ASSUME_NONNULL_END
