//
//  UIViewController+WNRouter.h
//  Module1
//
//  Created by WinningMac on 2019/7/11.
//  Copyright © 2019 winning. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ModuleURL.h"

NS_ASSUME_NONNULL_BEGIN

@interface UIViewController (WNRouter)

-(void)openURL:(NSString *)URL withUserInfo:(NSDictionary *)userInfo completion:(void (^)(id result))completion;

-(void)openInformalURL:(NSString *)URL withUserInfo:(NSDictionary *)userInfo completion:(void (^)(id result))completion;

-(void)openURL:(NSString *)URL withUserInfo:(NSDictionary *)userInfo;

-(void)openURL:(NSString *)URL completion:(void (^)(id result))completion;

-(void)openURL:(NSString *)URL;


@end

NS_ASSUME_NONNULL_END
