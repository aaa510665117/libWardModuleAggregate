//
//  NSString+Date.h
//  YYProject
//
//  Created by Joe on 2017/6/5.
//  Copyright © 2017年 Shanghai DataSeed Information Technology Co.,Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSDate (DotNetString)

+ (NSDate *)DateFromDotNetJSONString:(NSString *)string;
    
@end
