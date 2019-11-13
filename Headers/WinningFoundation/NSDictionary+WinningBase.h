//
//  NSDictionary+WinningBase.h
//  WinningFoundation
//
//  Created by winning on 2019/5/24.
//  Copyright © 2019年 winning. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

extern NSDictionary* WinningTextAattributes(UIColor *color, UIFont *font);

NS_ASSUME_NONNULL_BEGIN

@interface NSDictionary (WinningBase)

- (NSString*)queryStringByEntryKeyAscOrder;

+ (NSDictionary *)attributesWithColor:(UIColor *)color font:(UIFont *)font;

+ (NSDictionary *)attributesWithColor:(UIColor *)color font:(UIFont *)font alignment:(NSTextAlignment)alignment lineSpacing:(NSNumber *)lineSpacing;
+ (NSDictionary *)attributesWithColor:(UIColor *)color font:(UIFont *)font paragraphStyle:(NSMutableParagraphStyle *)paragraphStyle;

@end

NS_ASSUME_NONNULL_END
